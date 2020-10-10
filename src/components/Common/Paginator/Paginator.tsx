import styles from "./Paginator.module.css";
import React, {useState} from "react";
import cn from "classnames"

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage?: number
    onPageChanged?: (pageNumber: number) => void
    portionSize?: number
}

export const Paginator: React.FC<PropsType> = ({totalItemsCount, pageSize, currentPage = 1, onPageChanged = x => x, portionSize = 10}) => {
    debugger
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPageNumberInPortion = (portionNumber - 1) * portionSize + 1;
    let rightPageNumberInPortion = portionNumber * portionSize;

    return <div className={styles.paginator}>
        { portionNumber > 1 && <button onClick={()=> {setPortionNumber(portionNumber -1)}}>Prev</button>}
            {pages
                .filter(p => p <= rightPageNumberInPortion && p >= leftPageNumberInPortion)
                .map((p) => {
                    return <span className={cn({[styles.selectedPage]: currentPage === p}, styles.pageNumber)}
                                 key={p}
                                 onClick={(e) => {onPageChanged(p)}}>
                            {p}</span>
                })
            }
        {portionCount > portionNumber && <button onClick={()=> {setPortionNumber(portionNumber + 1)}}>Next</button>}
    </div>
}