import { useUser } from "@/models/user";

const ChildComp = () => {
  const { birthDay } = useUser();

  return (
    <button onClick={birthDay}>过生日</button>
  )
}

export default function HomePage() {
  const { userAge, userName } = useUser();

  return (
    <div>
      <h2>我叫 {userName} ，今年 {userAge}岁</h2>
      <ChildComp/>
    </div>
  );
}
