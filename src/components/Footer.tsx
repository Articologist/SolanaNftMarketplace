import { FC } from 'react';
import styles from "../styles/custom.module.css"
import SolLogo from "../../public/mstile-310x310.png"

export const Footer: FC = () => {
    return (
        <div className="">
            <footer className="mx-auto  flex flex-row p-2 text-center items-center footer bg-neutral text-neutral-content">
                <div className="pl-2">
                    <img src={SolLogo.src} width="25px" height="25px" className={styles.sologo}/>
                                      </div>
                <div className="max-w-md mx-auto sm:pl-12 grid-flow-col gap-4 text-center">
                    
                </div>
                <div className="grid-flow-col gap-4 text-center pr-2">
                    <div>
                        <p className="text-black text-base font-light cursor-default ">
                            Powered by
                        </p>
                        <a
                            rel="noreferrer"
                            href="https://www.audi0.agency/"
                            target="_blank"
                            className="text-black text-base font-bold hover:text-primary-dark transition-all duration-200"
                        >
                            audi0
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
