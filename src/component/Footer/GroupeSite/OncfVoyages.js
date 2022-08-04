export const OncfVoyages = ({ title , lien1 , lien2, textl2 , textl1 }) => {
    return(
    <div className="OncfVoyages">
        <h2 className="titel">{title}</h2>
        <div className="listoncf">
            <a className="lienoncf" href={lien1} >
                 {textl1}
                </a>
            <a className="lienoncf" href={lien2}>
                 {textl2}
                </a>
        </div>
    </div>
    )
}