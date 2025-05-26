import Typography from "../components/ui-kit/Typography.jsx";
import ButtonsBadges from "../components/ui-kit/ButtonsBadges.jsx";
import Alerts from "../components/ui-kit/Alerts.jsx";
import GridCards from "../components/ui-kit/GridCards.jsx";
import FormControls from "../components/ui-kit/FormControls.jsx";
import NavigationTabs from "../components/ui-kit/NavigationTabs.jsx";
import ProgressToastTooltip from "../components/ui-kit/ProgressToastTooltip.jsx";
import AsideExample from "../components/ui-kit/AsideExample.jsx";
import Avatar from "../components/ui-kit/Avatar.jsx";
import Dropdown from "../islands/ui-kit/Dropdown.jsx";
import Table from "../components/ui-kit/Table.jsx";
import Stepper from "../components/ui-kit/Stepper.jsx";
import ListGroup from "../components/ui-kit/ListGroup.jsx";
import ChipPill from "../components/ui-kit/ChipPill.jsx";
import Spinner from "../components/ui-kit/Spinner.jsx";
import Timeline from "../components/ui-kit/Timeline.jsx";
import Divider from "../components/ui-kit/Divider.jsx";
import Popover from "../components/ui-kit/Popover.jsx";

export default function UiKitShowcase() {
  return (
    <main class="container">
      <h1 class="text-center">UI Kit CSS Showcase</h1>
      <Typography />
      <ButtonsBadges />
      <Alerts />
      <GridCards />
      <FormControls />
      <NavigationTabs />
      <ProgressToastTooltip />
      <AsideExample />
      <Avatar />
      <Dropdown />
      <Table />
      <Stepper />
      <ListGroup />
      <ChipPill />
      <Spinner />
      <Timeline />
      <Divider />
      <Popover />
    </main>
  );
}
