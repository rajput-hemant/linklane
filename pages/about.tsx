import ProfileCard from "@/components/ProfileCard";

const About = () => {
  const image = "/image/avatar.png";
  console.log("hiiii");

  return (
    <>
      <div className="m-0 flex flex-wrap justify-center gap-x-24 gap-y-5 bg-gray-200 dark:bg-neutral-900">
        <ProfileCard
          imgsrc={image}
          description="Student in GLA University"
          name="Khushal"
          designation="Full Stack Developer"
          about="ReactJS | Nextjs | Tailwind css"
        />
        <ProfileCard
          imgsrc={image}
          description="Student in GLA University"
          name="Hemant"
          designation="Full Stack Developer"
          about="ReactJS | Nextjs | Tailwind css"
        />
        <ProfileCard
          imgsrc={image}
          description="Student in GLA University"
          name="Ritik"
          designation="Front-End Developer"
          about="ReactJS | Nextjs | Tailwind css"
        />
        <ProfileCard
          imgsrc={image}
          description="Student in GLA University"
          name="Kashish"
          designation="Front-end Developer"
          about="ReactJS | Figma"
        />
        <ProfileCard
          imgsrc={image}
          description="Student in GLA University"
          name="Shyama"
          designation="Designer"
          about="Figma | Tailwaind css "
        />
        <ProfileCard
          imgsrc={image}
          description="Student in GLA University"
          name="Kalyani"
          designation="Designer"
          about="Canva | Figma "
        />
      </div>
    </>
  );
};

export default About;
