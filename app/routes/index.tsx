import { json, useLoaderData } from "remix"
import { getUser } from "../models/user.server"
import Logo from "../assets/logo-vertical.svg"
import type { LoaderFunction } from "remix"

export const loader: LoaderFunction = async () => {
  const user = await getUser()

  return json(user)
}

export default function Index() {
  const user = useLoaderData()
  
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1 className="logo">
        <a href="https://mnyou.org">
          <img src={Logo} alt="MNYou" />
        </a>
      </h1>
      
      <ul>
        <li>
          <a
            target="_blank"
            href="https://www.givemn.org/story/Oalbwe"
            rel="noreferrer"
          >
            Help Us Recover From May Storm Damage
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/1_n_BY7QgsYC-VAM3IHJcEVk9sB4GhmOr1_IAajTNC2I/viewform?edit_requested=true"
            rel="noreferrer"
          >
            2022 CSA Signup
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.facebook.com/MNyouYouth" rel="noreferrer">
            Facebook
          </a>
        </li>
        <li>
          Venmo: @mnyou
        </li>
        <li>
          PayPal: @mnyouinc
        </li>
        <li>
          Mailing address: <br />
          1006 Horseshoe Drive <br />
          Willmar, MN 56201
        </li>
      </ul>
    </div>
  );
}
