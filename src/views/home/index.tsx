// Next, React
import { FC, useEffect, useState } from "react"
import Link from "next/link"

// Wallet
import { useWallet, useConnection } from "@solana/wallet-adapter-react"


// Store
import useUserSOLBalanceStore from "../../stores/useUserSOLBalanceStore"
import styles from "../../styles/custom.module.css"
import Typewriter from "typewriter-effect";
import Infinite from "./infinite-loader.gif";
import IntroNft from "../../../public/audocs-newlogo-full-2015-open copy.png";



export const HomeView: FC = ({ }) => {
  const wallet = useWallet()
  const { connection } = useConnection()

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  return (
    <div className={styles.container}>
      <img src={IntroNft.src} width="50%" className={styles.intronft} />
      <div className={styles.centered}>
        <div className="md:hero mx-auto p-4">
          <div className="md:hero-content flex flex-col">
            <h1 className="text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#000000] to-[#336699]">
              Audio Documents{" "}
              <span>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Distributed ledger")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("Discover, Pay-Plug & Play")
                      .pauseFor(2000)
                      .deleteAll()
                      .start();
                  }}
                />
              </span>
            </h1>

            <Link
              href={{
                pathname: '/explore',
                query: { name: 'explore' },
              }}
            >
              <button
                className="px-12 m-2 btn animate-pulse bg-gradient-to-r from-[#000000] to-[#336699] hover:from-red-500 hover:to-yellow-500 ..."

              >
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
