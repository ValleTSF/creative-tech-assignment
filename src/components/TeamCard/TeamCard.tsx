import { ReactComponent as MailIcon } from "../../assets/icons/mail-icon.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone-icon.svg";
import * as S from "./styled";

interface TeamCardProps {
  firstName: string;
  lastName: string;
  location: string;
  image: string;
  email: string;
  phone: string;
}

export default function TeamCard({
  firstName,
  lastName,
  image,
  location,
  email,
  phone,
}: TeamCardProps): JSX.Element {
  return (
    <S.CardContainer>
      <S.CardName>
        {firstName} {lastName}
      </S.CardName>
      <S.CardPicture width={100} height={100} src={image} alt="team member" />
      <p>{location}</p>
      <S.ContactContainer>
        <MailIcon />
        <PhoneIcon />
      </S.ContactContainer>
    </S.CardContainer>
  );
}
