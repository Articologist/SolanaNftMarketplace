import { FC } from "react"
import Link from "next/link"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { useAutoConnect } from "../contexts/AutoConnectProvider"
import NetworkSwitcher from "./NetworkSwitcher"
import SolLogo from "../../public/044ED15B-68B2-4D5F-AC32-54CD1926C9C0.jpg"
import styles from "../styles/custom.module.css"

export const AppBar: FC = (props) => {
  const { autoConnect, setAutoConnect } = useAutoConnect()

  return (
    <div>
      {/* NavBar / Header */}
      <div className="navbar flex flex-row md:mb-2 shadow-lg bg-neutral text-neutral-content">
        <div className="navbar-start">
          <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
            <svg
              className="inline-block w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
           <img src={SolLogo.src} width="200px" className={styles.sologo1}/>
        {/*   <div className="hidden sm:inline w-22 h-22 md:p-2">
           
                      <img src="../../public/044ED15B-68B2-4D5F-AC32-54CD1926C9C0.jpg" width="50px" className=""/>

        
          </div> */}
        </div>

        {/* Nav Links */}
        <div className="hidden md:inline md:navbar-center">
          <div className="flex items-stretch">
            <Link href="/">
              <a className="text-black btn btn-ghost btn-sm rounded-btn">Home</a>
            </Link>
           {/* <Link href="/checkwallet">
              <a className="btn btn-ghost btn-sm rounded-btn">Check Wallet</a>
            </Link> */}
           {/* <Link href="/display">
              <a className="btn btn-ghost btn-sm rounded-btn">Display NFT</a>
            </Link> */}
            <Link href="/explore">
              <a className="text-black btn btn-ghost btn-sm rounded-btn">Explore</a>
            </Link>
            {/* <Link href="/candymachine">
              <a className="btn btn-ghost btn-sm rounded-btn">Candy Machine</a>
            </Link> */}
           {/* <Link href="/soluno">
              <a className="btn btn-ghost btn-sm rounded-btn">SolUNO</a>
            </Link> */}
          </div>
        </div>

        {/* Wallet & Settings */}
        <div className="navbar-end">
          <WalletMultiButton className="btn" />

          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="text-black btn-dark btn btn-square btn-ghost text-right">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box sm:w-52"
            >
              <li>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <a>Autoconnect</a>
                    <input
                      type="checkbox"
                      checked={autoConnect}
                      onChange={(e) => setAutoConnect(e.target.checked)}
                      className="toggle"
                    />
                  </label>

                  <NetworkSwitcher />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {props.children}
    </div>
  )
}
