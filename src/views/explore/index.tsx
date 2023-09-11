import { FC } from "react"
import { FetchRariableNfts } from "../../components/FetchRariableNfts"



export const ExploreView: FC = ({ }) => {
    return (
       
        <div className="md:hero mx-auto p-4">
          <div className="md:hero-content flex flex-col">
            <h1 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#000000] to-[#336699]">
            {/*  Explore audi0 Nfts */}
            </h1>
            <iframe
  id="inlineFrameExample"
  title="Inline Frame Example"
  width="100%"
  height="1200"
  src="https://audocs.notion.site/Getting-Started-with-Audio-Wallet-25e5407503f44d5ebe2f5c7d56ec9cca?pvs=4"
>
</iframe>
            {/* CONTENT GOES HERE */}
            <div className="text-center">
            {/*  <FetchRariableNfts /> */}
            </div>
          </div>
        </div>
    )
}
