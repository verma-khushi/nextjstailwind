import React from "react";
import Image from "next/image";

interface Leaders {
  image: string;
  name: string;
  profession: string;
}

export default function LeadersCard({ leader }: { leader: Leaders }) {
  return (
    <div className="bg-white rounded-lg">
      <div>
        <Image
          src={leader.image}
          alt="teamMember"
          width={359}
          height={199}
          className=""
          objectFit="contain"
        />
        <div
          className="text-center relative text-[14px] items-center border p-8 2xl:w-[92.5%] leaders"
          style={{ border: "1px solid lightgray" }}
        >
          <h2 className="text-[18px] text-blue">{leader.name}</h2>
          <span className="text-sm">{leader.profession}</span>
        </div>
      </div>
    </div>
  );
}
