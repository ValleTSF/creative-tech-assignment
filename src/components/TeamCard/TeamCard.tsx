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
  color: string;
}

export default function TeamCard({
  firstName,
  lastName,
  image,
  location,
  email,
  phone,
  color,
}: TeamCardProps): JSX.Element {
  return (
    <S.CardContainer color={color}>
      <S.CardName>
        {firstName} {lastName}
      </S.CardName>
      <S.CardPicture width={100} height={100} src={image} alt="team member" />
      <S.Location>{location}</S.Location>
      <S.ContactContainer>
        <MailIcon />
        <PhoneIcon />
      </S.ContactContainer>
    </S.CardContainer>
  );
}
