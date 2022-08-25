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
}

export default function TeamBar({
  firstName,
  lastName,
  location,
  image,
  email,
  phone,
}: TeamBarProps): JSX.Element {
  return (
    <S.BarContainer>
      <S.ProfileContainer>
        <S.BarPicture width={100} height={100} src={image} alt="team member" />
        <S.InformationContainer>
          <S.BarName>
            {firstName} {lastName}
          </S.BarName>
          <S.Location>{location}</S.Location>
        </S.InformationContainer>
      </S.ProfileContainer>
      <S.ContactContainer>
        <MailIcon />
        <PhoneIcon />
      </S.ContactContainer>
    </S.BarContainer>
  );
}
