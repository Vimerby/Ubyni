import React, { useRef, useState, useCallback, useEffect, FC } from "react";
import { IconSvg, Img } from '../../Images';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../data/redux/store";
import { setLanguage } from '../../../data/redux/slices/languageSlice';
import { translation } from "../../../data/locales/languages/languages";



export const Lang = React.memo(() => {

   const lang = useSelector((state: RootState) => state.languages.language)
   const dispatch = useDispatch()
   const box = useRef(null);
   const [open, setOpen] = useState(false)


   type TypeimgLanguages = {
      ua: string,
      en: string,
   }
   let imgLanguages: TypeimgLanguages = {
      "ua": Img.LangUA,
      "en": Img.LangEN,
   };

   
   return (
      <div className="">
         <div className=" flex items-center relative cursor-pointer" onClick={() => { setOpen(!open) }}>

            <div className="relative w-30 h-20">
               <img src={imgLanguages[lang as keyof typeof imgLanguages]} alt={lang} width={30} className="absolute w-full h-full z-0 rounded-sm" />
            </div>
            <span className={`stroke-white ml-10 ${open ? "rotate-90" : ""}`}>
               <IconSvg name="arrow" />
            </span>

            {open && <ul ref={box} className="absolute w-30 min-w-[50px] bg-white top-[calc(100%+10px)] drop-shadow-md rounded-sm">
               {Object.entries(imgLanguages).map((item, key) => (

                lang != item[0] && <li key={key} className="text-center font-semibold text-primary bg-white transition-all p-2 rounded-sm hover:bg-[#f3f3f3]" onClick={() => {
                     dispatch(setLanguage(item[0]));
                  }}>{item[0]}</li>

               ))}

            </ul>}
            <span></span>
         </div>

      </div>
   );
})
