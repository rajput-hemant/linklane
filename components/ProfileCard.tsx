import Image from "next/image";
import { Instagram, Linkedin, TwitterIcon } from "lucide-react";

const ProfileCard = ({
  imgsrc,
  name,
  designation,
  about,
  description,
}: {
  imgsrc: string;
  name: string;
  designation: string;
  about: string;
  description: string;
}) => {
  return (
    <>
      <div className=" my-5 flex h-2/5 w-80 cursor-pointer flex-col items-center justify-start rounded-2xl bg-gray-100 shadow-md shadow-slate-700 dark:bg-neutral-800 dark:shadow-none">
        <div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={imgsrc}
              width="120"
              height="400"
              className="m-3 mb-2 rounded-full"
              alt=""
            />
            <h1 className="text-center text-3xl font-bold text-neutral-700 dark:text-neutral-50">{name}</h1>
          </div>
          <p className="pb-1 text-center text-base font-normal uppercase text-slate-700 dark:text-slate-400">
            {designation}
          </p>
          <h3 className="text-md py-1 text-center font-semibold uppercase">
            {about}
          </h3>
          <p className="text-md mx-10 text-center text-sm">{description}</p>
          <div className="flex items-center justify-center gap-6 py-2">
            <TwitterIcon className="h-6 w-6 cursor-pointer text-blue-500" />
            <Instagram className="h-6 w-6 cursor-pointer text-pink-400" />
            <Linkedin className="h-6 w-6 cursor-pointer text-blue-700" />
          </div>
          <div className="pu-2 flex items-center justify-center gap-6 pb-3">
            <button className="w-11/12 rounded-lg bg-gray-800 p-3 font-semibold uppercase text-white hover:bg-gray-900 dark:bg-neutral-700 dark:hover:bg-neutral-900">
              Work Together
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
