import styles from "./Paginator.module.css";
import React, {useState} from "react";
import cn from "classnames"

export const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPageNumberInPortion = (portionNumber - 1) * portionSize + 1;
    let rightPageNumberInPortion = portionNumber * portionSize;

    return <div className={styles.paginator}>
        <button disabled={portionNumber == 1} onClick={()=> {setPortionNumber(portionNumber - 1)}}>Prev</button>
            {pages
                .filter(p => p <= rightPageNumberInPortion && p >= leftPageNumberInPortion)
                .map((p) => {
                    return <span className={cn({[styles.selectedPage]: currentPage === p}, styles.pageNumber)}
                                 key={p}
                                 onClick={(e) => {onPageChanged(p)}}>
                            {p}</span>
                })}

        {portionCount > portionNumber && <button onClick={()=> {setPortionNumber(portionNumber + 1)}}>Next</button>}
    </div>
}