import { createTeleporter } from "react-teleporter";

const HeaderTitleTeleporter = createTeleporter();

export const HeaderTitleTarget = HeaderTitleTeleporter.Target;
export const HeaderTitle = HeaderTitleTeleporter.Source;
