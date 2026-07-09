'use client'
import { Button } from "@/components/Button";
import Checkbox from "@/components/Checkbox/Checkbox";
import { useState } from "react";

export default function Home() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex flex-col flex-1 items-center gap-1.5 justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button label="Button" />
      <Button label="Button" icon="plus" />
      <Button label="Button" disabled />

      <Button label="Button" theme="secondary" />
      <Button label="Button" theme="secondary" icon="plus" />
      <Button label="Button" theme="secondary" disabled />

      <Button label="Button" theme="shop" />
      <Button label="Button" theme="shop" icon="plus" />
      <Button label="Button" theme="shop" disabled />

      <Button label="Button" icon="search" disabled />

      {checked}

      <Checkbox checked={checked} onChange={setChecked} />
      <Checkbox checked={checked} onChange={setChecked} disabled />
    </div>
  );
}
