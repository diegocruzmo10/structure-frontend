import { ModeToggle } from "../../../../shared/ModeToggle"

const HeaderUser = () => {
  return (
    <div className="flex justify-between items-center gap-4">
      <p className="text-2xl semi-bold">Header</p>
      <ModeToggle />
    </div>
  )
}

export default HeaderUser
