import Image from 'next/image'
import Data from "../utils/Data.json"
import Showcase from './components/Showcase'

export default function Home() {
  // console.log(Data)
  return (
    <main className="w-[100vw] max-w-[1300px] m-auto h-[100vh]">
        <header className="flex w-full h-[4rem] border-b items-center mb-4">
          <h2 className="text-3xl font-bold">Menu</h2>
        </header>
          <div className="flex flex-wrap gap-2">
            <Showcase name={Data.SoftDrinks[0].category?.toString()} item={Data.SoftDrinks}/>
            <Showcase name={Data.Whiskey[0].category?.toString()} item={Data.Whiskey}/>
            <div className="flex flex-col gap-2">
              <Showcase name={Data.Tequila[0].category?.toString()} item={Data.Tequila}/>
              <Showcase name={Data.Gin[0].category?.toString()} item={Data.Gin}/>
            </div>
            <Showcase name={Data.Rose[0].category?.toString()} item={Data.Rose}/>
            <Showcase name={Data.Alc[0].category?.toString()} item={Data.Alc}/>
            <Showcase name={Data.NonAlc[0].category?.toString()} item={Data.NonAlc}/>
            <Showcase name={Data.Rice[0].category?.toString()} item={Data.Rice}/>
            <Showcase name={Data.SHOTS[0].category?.toString()} item={Data.SHOTS}/>
            <Showcase name={Data.ED[0].category?.toString()} item={Data.ED}/>
            <Showcase name={Data.Cream[0].category?.toString()} item={Data.Cream}/>
            <Showcase name={Data.Protein[0].category?.toString()} item={Data.Protein}/>
            <Showcase name={Data.Bitters[0].category?.toString()} item={Data.Bitters}/>
            <Showcase name={Data.Water[0].category?.toString()} item={Data.Water}/>
            <Showcase name={Data.Soup[0].category?.toString()} item={Data.Soup}/>
            <Showcase name={Data.Bb[0].category?.toString()} item={Data.Bb}/>
            <Showcase name={Data.Extras[0].category?.toString()} item={Data.Extras}/>
            <Showcase name={Data.Juice[0].category?.toString()} item={Data.Juice}/>
            <Showcase name={Data.Brandy[0].category?.toString()} item={Data.Brandy}/>




          </div>

    </main>
      )
}
