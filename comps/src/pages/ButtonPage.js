import Button from "../components/Button";
import { GoBell, GoCloudDownload } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log("Clicks");
  };
  return (
    <div>
      <div>
        <Button success rounded outline className="mb-5" onClick={handleClick}>
          <GoBell className="mr-2"></GoBell>
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload></GoCloudDownload>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoBell></GoBell>
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
