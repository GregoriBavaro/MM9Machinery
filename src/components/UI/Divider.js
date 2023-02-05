import {
  HeroShapeDividerBottomInfo,
  HeroShapeDividerTopInfo,
} from "./HeroShapeDivider";

const DividerTop = () => {
  return <HeroShapeDividerBottomInfo />;
};

const DividerBottom = () => {
  return <HeroShapeDividerTopInfo />;
};

const HorizontalDivider = () => {
  return (
    <div className="divider-div-container">

    </div>
  )
}

export { DividerTop, DividerBottom, HorizontalDivider };
