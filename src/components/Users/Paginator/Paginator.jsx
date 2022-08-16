import React from "react";
import PageItem from './PageItem';
import { useState, useEffect } from "react";


function Paginator(props) {

    let GeneralCount = Math.ceil(props.UsersCount/props.UsersCountOnPage)

    let [minPage, SetMinPage] = useState(1)
    let [PagesCount, setPagesCount] = useState(1)

    useEffect( () => 
            {
                let StartPageTemp = minPage;
                if ( props.ChoosingPage - minPage > 4 ) {
                    StartPageTemp = props.ChoosingPage - 4
                    SetMinPage(StartPageTemp)
                }
                if ( (props.ChoosingPage - minPage < 4) ) {
                    if ( (props.ChoosingPage - 3 > 0)) {
                        StartPageTemp = props.ChoosingPage - 3
                        SetMinPage(StartPageTemp)
                    }
                    else {
                        SetMinPage(1)
                    }
                }
                if ( StartPageTemp + 9 > GeneralCount) {
                    setPagesCount(GeneralCount - StartPageTemp)
                }
                else {
                    setPagesCount(GeneralCount > 9 ? 9 : GeneralCount) 
                }
            }, [props.UsersCount, props.ChoosingPage]
            )

    let Pages = []

    for (var i = minPage; i <= PagesCount + minPage; i++) {Pages.push(i) }

    Pages = Pages.map(item => 
            <PageItem OnChoosePage={props.OnChoosePage} UsersCountOnPage={props.UsersCountOnPage} 
                      ChoosingPage={props.ChoosingPage} item={item}/>
        )

    return (
        <div>
            { Pages }
        </div>
    )

}

export default Paginator;