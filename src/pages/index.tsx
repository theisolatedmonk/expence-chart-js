
import {GraphaBar} from '@/component/GraphaBar'
import { Logo } from '@/component/Logo'



export default function Home() {
  return (
    <main className='flex items-center justify-center min-h-screen'>
       <div className="container  h-[430px] w-[420px]  flex flex-col justify-between">
    <div className="contain1 flex justify-between items-center bg-orange-600 h-24 rounded-xl px-4">
      <div className="txtbalence flex flex-col px-4">
        <p className="mybal text-sm text-white ">My balance</p>
        <h1 className="font-bold text-white text-xl">$921.48</h1>
      </div>
      <div id="logobox" className="h-16 w-16 flex items-center"><Logo></Logo></div>
    </div>
    <div className="contain2 bg-white h-80 gap-2 justify-between rounded-xl flex flex-col p-4  text-yellow-950">
        <h1 className=" font-bold text-xl ">Spending - Last 7 days</h1>
        <div className="bardayval flex h-48 items-center text-sm text-center transition-all ">
        <GraphaBar/>
         
          </div>
          <hr />
        <div className="totalamtpercent flex justify-between">
          <div className="txtamttotal flex flex-col">
            <p className="text-sm">Total this month</p>
            <h1 id="totalamt" className="text-3xl font-bold">$478.33</h1>
          </div>
          <div className="percenttxt flex flex-col text-right">
            <p id="percent" className="text-sm font-bold">+2.4%</p>
            <p className="text-sm">for last month</p>
          </div>
        </div>
      </div>
    </div>
    </main>

 
  )
}
