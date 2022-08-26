import * as S from "./styled";
import { ReactComponent as MailIcon } from "../../assets/icons/mail-icon.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone-icon.svg";

interface TeamBarProps {
  firstName: string;
  lastName: string;
  location: string;
  image: string;
  email: string;
  phone: string;
  color: string;
}

export default function TeamBar({
  firstName,
  lastName,
  location,
  image,
  email,
  phone,
  color,
}: TeamBarProps): JSX.Element {
  return (
    <S.BarContainer color={color}>
      <S.ProfileContainer>
        <S.BarPicture width={100} height={100} src={image} alt="team member" />
        <S.InformationContainer>
          <h3>
            {firstName} {lastName}
          </h3>
          <S.Location>{location}</S.Location>
        </S.InformationContainer>
      </S.ProfileContainer>
      <S.ContactContainer>
        <a href={`mailto:${email}`}>
          <MailIcon />
        </a>
        <a href={`tel:${phone}`}>
          <PhoneIcon />
        </a>
      </S.ContactContainer>
    </S.BarContainer>
  );
}
