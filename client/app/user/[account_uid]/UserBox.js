import { BsPinAngleFill } from "react-icons/bs";

export default function UserBox({ userDetails }) {
  return (
    <>
      {/* <h1>HELLO {userDetails.user_name}</h1> */}
      <center className="w-full px-4 mt-20">
        <div
          className="flex flex-col break-words w-full mb-6 shadow-2xl rounded-lg"
          style={{ backgroundColor: `#f7f7f7` }}
        >
          <div className="flex flex-wrap justify-center">
            <img
              alt="display pic"
              src={userDetails.user_avatar}
              className="rounded-full w-32 h-32 align-middle border-none shadow-2xl -m-16 -ml-20 lg:-ml-16 mb-1"
            />
          </div>
          <div className="text-center mt-12">
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
              {userDetails.user_name}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <BsPinAngleFill size={"1%"} className="fas mr-2 text-lg text-blueGray-400" />
              {userDetails.user_tagline}
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                {userDetails.user_passage}
                </p>
              </div>
            </div>
          </div>
        </div>
      </center>
      <div className="px-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        suscipit, earum architecto officiis repudiandae officia perspiciatis
        sint doloremque soluta veniam nam placeat at laborum error obcaecati,
        perferendis vitae voluptatibus saepe! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolore suscipit, earum architecto officiis
        repudiandae officia perspiciatis sint doloremque soluta veniam nam
        placeat at laborum error obcaecati, perferendis vitae voluptatibus
        saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        suscipit, earum architecto officiis repudiandae officia perspiciatis
        sint doloremque soluta veniam nam placeat at laborum error obcaecati,
        perferendis vitae voluptatibus saepe! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolore suscipit, earum architecto officiis
        repudiandae officia perspiciatis sint doloremque soluta veniam nam
        placeat at laborum error obcaecati, perferendis vitae voluptatibus
        saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        suscipit, earum architecto officiis repudiandae officia perspiciatis
        sint doloremque soluta veniam nam placeat at laborum error obcaecati,
        perferendis vitae voluptatibus saepe! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolore suscipit, earum architecto officiis
        repudiandae officia perspiciatis sint doloremque soluta veniam nam
        placeat at laborum error obcaecati, perferendis vitae voluptatibus
        saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        suscipit, earum architecto officiis repudiandae officia perspiciatis
        sint doloremque soluta veniam nam placeat at laborum error obcaecati,
        perferendis vitae voluptatibus saepe! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolore suscipit, earum architecto officiis
        repudiandae officia perspiciatis sint doloremque soluta veniam nam
        placeat at laborum error obcaecati, perferendis vitae voluptatibus
        saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        suscipit, earum architecto officiis repudiandae officia perspiciatis
        sint doloremque soluta veniam nam placeat at laborum error obcaecati,
        perferendis vitae voluptatibus saepe! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolore suscipit, earum architecto officiis
        repudiandae officia perspiciatis sint doloremque soluta veniam nam
        placeat at laborum error obcaecati, perferendis vitae voluptatibus
        saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        suscipit, earum architecto officiis repudiandae officia perspiciatis
        sint doloremque soluta veniam nam placeat at laborum error obcaecati,
        perferendis vitae voluptatibus saepe! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolore suscipit, earum architecto officiis
        repudiandae officia perspiciatis sint doloremque soluta veniam nam
        placeat at laborum error obcaecati, perferendis vitae voluptatibus
        saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        suscipit, earum architecto officiis repudiandae officia perspiciatis
        sint doloremque soluta veniam nam placeat at laborum error obcaecati,
        perferendis vitae voluptatibus saepe!Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolore suscipit, earum architecto officiis
        repudiandae officia perspiciatis sint doloremque soluta veniam nam
        placeat at laborum error obcaecati, perferendis vitae voluptatibus
        saepe!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        suscipit, earum architecto officiis repudiandae officia perspiciatis
        sint doloremque soluta veniam nam placeat at laborum error obcaecati,
        perferendis vitae voluptatibus saepe!Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolore suscipit, earum architecto officiis
        repudiandae officia perspiciatis sint doloremque soluta veniam nam
        placeat at laborum error obcaecati, perferendis vitae voluptatibus
        saepe!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        suscipit, earum architecto officiis repudiandae officia perspiciatis
        sint doloremque soluta veniam nam placeat at laborum error obcaecati,
        perferendis vitae voluptatibus saepe!Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolore suscipit, earum architecto officiis
        repudiandae officia perspiciatis sint doloremque soluta veniam nam
        placeat at laborum error obcaecati, perferendis vitae voluptatibus
        saepe!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        suscipit, earum architecto officiis repudiandae officia perspiciatis
        sint doloremque soluta veniam nam placeat at laborum error obcaecati,
        perferendis vitae voluptatibus saepe!Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolore suscipit, earum architecto officiis
        repudiandae officia perspiciatis sint doloremque soluta veniam nam
        placeat at laborum error obcaecati, perferendis vitae voluptatibus
        saepe!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        suscipit, earum architecto officiis repudiandae officia perspiciatis
        sint doloremque soluta veniam nam placeat at laborum error obcaecati,
        perferendis vitae voluptatibus saepe!Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolore suscipit, earum architecto officiis
        repudiandae officia perspiciatis sint doloremque soluta veniam nam
        placeat at laborum error obcaecati, perferendis vitae voluptatibus
        saepe!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        suscipit, earum architecto officiis repudiandae officia perspiciatis
        sint doloremque soluta veniam nam placeat at laborum error obcaecati,
        perferendis vitae voluptatibus saepe!Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolore suscipit, earum architecto officiis
        repudiandae officia perspiciatis sint doloremque soluta veniam nam
        placeat at laborum error obcaecati, perferendis vitae voluptatibus
        saepe!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        suscipit, earum architecto officiis repudiandae officia perspiciatis
        sint doloremque soluta veniam nam placeat at laborum error obcaecati,
        perferendis vitae voluptatibus saepe!
      </div>
    </>
  );
}
