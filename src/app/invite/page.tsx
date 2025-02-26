import Image from 'next/image'
import logo from '../../assets/logo.svg'
import { InviteLinkInput } from './inviteLinkInput'
import { Ranking } from './ranking'
import { Stats } from './stats'

export default function InvitePage() {
  const inviteLink = 'http//localhost:3000/invite/55458785424587'

  return (
    <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={logo} alt="devstage" width={108.5} height={30} />
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
            Inscrição confirmada!
          </h1>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="space-y-6 ">
          <div className="space-y-3">
            <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
              Indique
            </h2>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
              at aperiam.
            </p>
          </div>

          <InviteLinkInput inviteLink={inviteLink} />

          <Stats />
        </div>
      </div>
      <Ranking />
    </div>
  )
}
