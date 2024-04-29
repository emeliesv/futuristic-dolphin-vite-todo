/* eslint-disable react/prop-types */



const Burger = ({isOpen}) => {
    return(
        <>
            <div className="burgermenu">
                <div className="burger burger1"/>
                <div className="burger burger2"/>
                <div className="burger burger3"/>
            </div>

            <style>{`
            .burger1{
                transform:${isOpen ? "rotate(45deg)":"rotate(0)"};
                }
            .burger2{
                    transform:${isOpen ? "translateX(100deg)":"translateX(0)"};
                    opacity:${isOpen ? 0:1};
                }
            .burger3{
                transform:${isOpen ? "rotate(-45deg)":"rotate(0)"};
            }

            `}</style>
        </>
    )
}

export default Burger