import styled, {css} from "styled-components";
import { ReactComponent as airconditioner } from "../../../assets/icons/air-conditioner.svg";
import { ReactComponent as barbeque } from "../../../assets/icons/barbecue.svg";
import { ReactComponent as dryer } from "../../../assets/icons/dryer.svg";
import { ReactComponent as gym } from "../../../assets/icons/gym.svg";
import { ReactComponent as grass } from "../../../assets/icons/grass.svg";
import { ReactComponent as laundry } from "../../../assets/icons/laundry.svg";
import { ReactComponent as microwave } from "../../../assets/icons/microwave.svg";
import { ReactComponent as oshower } from "../../../assets/icons/outdoor-shower.svg";
import { ReactComponent as refrigerator } from "../../../assets/icons/refrigerator.svg";
import { ReactComponent as sauna } from "../../../assets/icons/sauna.svg";
import { ReactComponent as swimming } from "../../../assets/icons/swimming.svg";
import { ReactComponent as tv } from "../../../assets/icons/tv-cable.svg";
import { ReactComponent as washer } from "../../../assets/icons/washer.svg";
import { ReactComponent as wifi } from "../../../assets/icons/wifi.svg";
import { ReactComponent as window } from "../../../assets/icons/window-coverings.svg";
import { ReactComponent as  chair } from "../../../assets/icons/chair.svg";

const Container = styled.div`
    display: flex;
    justify-content: ${({sb})=>sb ? 'space-between': 'baseline'} ;
    align-items: center;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;
const common = css`
    width: 35px;
    height:35px;
    padding: 10px;
    border-radius: 35%;
    background: #F6F8F9;
    margin-right: 10px;
`;

const Icons = styled.div``;
Icons.Airconditioner = styled(airconditioner)`
    ${common}
`;
Icons.Barbeque = styled(barbeque)`
    ${common}
`;
Icons.Dryer = styled(dryer)`
    ${common}
`;
Icons.Gym = styled(gym)`
    ${common}
`;
Icons.Grass = styled(grass)`
    ${common}
`;
Icons.Laundry = styled(laundry)`
    ${common}
`;
Icons.Microwave = styled(microwave)`
    ${common}
`;
Icons.Oshower = styled(oshower)`
    ${common}
`;
Icons.Refrigerator = styled(refrigerator)`
    ${common}
`;
Icons.Sauna = styled(sauna)`
    ${common}
`;
Icons.Swimming = styled(swimming)`
    ${common}
`;
Icons.Tv = styled(tv)`
    ${common}
`;
Icons.Washer = styled(washer)`
    ${common}
`;
Icons.Wifi = styled(wifi)`
    ${common}
`;
Icons.Window = styled(window)`
    ${common}
`;
Icons.Dining = styled(chair)`
    ${common}
`;
export {Container, Wrapper, Icons};