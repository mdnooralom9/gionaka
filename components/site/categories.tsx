"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import Link from "next/link";


const categories = [
  {
    name: "Electrician",
    icon: "⚡",
    rating: 9.2,
    workers: "12,500+",
    jobs: "Electrical Repair, Wiring"
  },
  {
    name: "Plumber",
    icon: "🔧",
    rating: 8.8,
    workers: "9,800+",
    jobs: "Pipe Repair, Fitting"
  },
  {
    name: "Carpenter",
    icon: "🪚",
    rating: 8.5,
    workers: "7,200+",
    jobs: "Furniture, Wood Work"
  },
  {
    name: "Painter",
    icon: "🎨",
    rating: 8.3,
    workers: "6,400+",
    jobs: "House Painting, Wall Design"
  },
  {
    name: "AC Repair",
    icon: "❄️",
    rating: 9.0,
    workers: "8,900+",
    jobs: "AC Service, Installation"
  },
  {
    name: "Mobile Repair",
    icon: "📱",
    rating: 8.7,
    workers: "5,600+",
    jobs: "Phone Repair, Software"
  },
  {
    name: "Cleaning Service",
    icon: "🧹",
    rating: 9.1,
    workers: "10,300+",
    jobs: "Home Cleaning, Deep Clean"
  },
  {
    name: "Mechanic",
    icon: "🏍️",
    rating: 8.9,
    workers: "11,200+",
    jobs: "Bike, Car Repair"
  },
  {
    name: "Home Tutor",
    icon: "📚",
    rating: 9.4,
    workers: "4,800+",
    jobs: "School, Skill Training"
  },
  {
    name: "Beauty Service",
    icon: "💇",
    rating: 8.6,
    workers: "6,900+",
    jobs: "Salon, Personal Care"
  }
];


export function Categories() {


  const [search,setSearch] = useState("");

  const [sortRating,setSortRating] = useState(false);



  const filteredCategories = categories
  .filter((item)=>
    item.name
    .toLowerCase()
    .includes(search.toLowerCase())
  )
  .sort((a,b)=>
    sortRating
    ? b.rating - a.rating
    : 0
  );



  return (

<section className="py-16 bg-gray-50">


<div className="max-w-7xl mx-auto px-6">



<div className="text-center mb-10">


<h2 className="text-3xl md:text-4xl font-bold">
Top Rated Local Workers
</h2>


<p className="mt-3 text-gray-600">
Find trusted professionals with Gionaka rating system
</p>


</div>





<div className="flex flex-col md:flex-row gap-4 justify-center mb-10">



<input

type="text"

placeholder="Search service..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="
w-full
md:w-96
px-5
py-3
rounded-full
border
outline-none
focus:ring-2
focus:ring-green-500
"

/>





<button

onClick={()=>setSortRating(!sortRating)}

className="
px-6
py-3
rounded-full
bg-green-600
text-white
font-semibold
"

>

⭐ Top Rated

</button>



</div>






<div className="
grid 
grid-cols-1 
sm:grid-cols-2 
lg:grid-cols-3 
gap-6
">





{filteredCategories.map((item,index)=>(



<div

key={index}

className="
bg-white
rounded-3xl
border
p-6
shadow-sm
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-300
"

>




<div className="flex justify-between items-start">





<div className="flex gap-4 items-center">



<div

className="
w-16
h-16
rounded-2xl
bg-green-100
flex
items-center
justify-center
text-4xl
"

>

{item.icon}

</div>





<div>


<h3 className="text-xl font-bold">
{item.name}
</h3>


<p className="text-sm text-gray-500">
{item.workers} available
</p>



</div>



</div>







<div

className="
bg-green-600
text-white
px-3
py-2
rounded-xl
flex
items-center
gap-1
"

>


<Star

size={16}

className="fill-white"

/>


<span className="font-bold">
{item.rating}
</span>



</div>




</div>







<p className="mt-5 text-gray-600 text-sm">

{item.jobs}

</p>







<div className="mt-5">



<div className="flex justify-between text-sm mb-2">


<span>
Gionaka Trust Score
</span>


<span className="font-semibold">
{item.rating}/10
</span>


</div>






<div

className="
h-3
bg-gray-200
rounded-full
overflow-hidden
"

>


<div

className="
h-full
bg-green-500
rounded-full
"

style={{
width:`${item.rating * 10}%`
}}

/>



</div>



</div>







<Link

href={`/categories/${item.name
.toLowerCase()
.replaceAll(" ","-")}`}

>



<button

className="
mt-6
w-full
py-3
rounded-xl
bg-black
text-white
font-semibold
hover:bg-gray-800
transition
"

>

View Workers

</button>



</Link>






</div>



))}





</div>








<div className="text-center mt-10">


<button

className="
bg-black
text-white
px-8
py-3
rounded-full
hover:bg-gray-800
transition
"

>

View All Categories

</button>



</div>






</div>


</section>

  );

}
