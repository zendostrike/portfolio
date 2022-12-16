import Image from "next/image";

const images = [
  "https://i.pinimg.com/750x/0c/ef/de/0cefde71102c9a90db5ea20ad11777ec.jpg",
  "https://i.pinimg.com/564x/67/38/31/6738317c3ecdf855b490c5cee1f69f90.jpg",
  "https://i.pinimg.com/564x/5a/48/66/5a4866e7145eb155603e0cb1e5d740bf.jpg",
  "https://i.pinimg.com/564x/08/0d/e4/080de49b48b018327d865ef0ffd52231.jpg",
];

export default function Art() {
  return (
    <div>
      <p>
        As a hobby, I like to draw an design. I know I am really bad but I am
        making some progress.
      </p>

      <hr />

      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          width={150}
          height={150}
          alt={`art-${index + 1}`}
          style={{ objectFit: "cover" }}
        ></Image>
      ))}
    </div>
  );
}
