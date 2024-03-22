import { useEffect, useRef, useState } from "react";
import { url } from "../../Constants/url";
import { useCoomigSoon } from "../../hooks/useCoomingSoon";
import { Content, Poster , Carusel, Conteiner} from "./style";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button } from "@mui/material";

export default function Slider() {
    const { data } = useCoomigSoon()
    const ref = useRef<HTMLElement>()

    const [currentMoveSlider , setCurrentMoveSlider ] = useState(0)
    const [currentSliders, setCurrentSliders] = useState(0)


    const nextSlide = () => {
        if(ref.current ){

          setCurrentMoveSlider(currentMoveSlider - 160)
          ref.current.style.left = `${currentMoveSlider}px`
          
        }
      }
    
  
    const prevSlide = () => {
      if(ref.current && currentSliders >= 0 ){
        setCurrentMoveSlider(currentMoveSlider + 160)
        ref.current.style.left = `${currentMoveSlider}px`
        
      }
    };

    useEffect(()=>{

      if(ref.current){
        ref.current.style.left = '0px'
        setCurrentMoveSlider(ref.current.offsetLeft)
      }
    },[])

  

    return(
        <Content>
            <Button onClick={prevSlide}>
              <ChevronLeftIcon  />
            </Button>
            <Conteiner>
            <Carusel  ref={ref}>
              {data?.map(({ id, poster_path }, ) => (
                <Poster key={id}>
                  <img src={url(poster_path)}/>
                </Poster>
              ))}
            </Carusel>
            </Conteiner>
            <Button onClick={nextSlide}>
              <ChevronRightIcon  />
            </Button>
        </Content>
    )
}