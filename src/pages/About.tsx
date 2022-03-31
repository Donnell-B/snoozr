import { FunctionComponent } from "react";

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  return (
    <>
      <div className="flex flex-col">
        <p className="text-white grow-0 shrink font-RedHat">
          <span className="text-[9vh] underline underline-offset-1">About</span>
        </p>
        <div className="flex flex-col grow h-full shrink min-w-[320px] w-[80vw] text-white font-OpenSans border-2 border-white gap-5 p-4 bg-gray-600 bg-opacity-40">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            scelerisque, quam ac congue condimentum, ipsum massa ornare massa,
            vitae elementum nulla orci non massa. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae; Donec in
            justo venenatis nulla dignissim feugiat quis in turpis. Sed lacus
            augue, luctus tempus congue vel, pellentesque quis erat. Cras vel
            elementum nunc, ac elementum augue. Proin vel ornare purus. Nulla a
            turpis ac diam auctor dignissim interdum eget risus. Morbi luctus
            sapien bibendum euismod convallis. Proin magna velit, scelerisque
            sit amet dui sed, fringilla pellentesque nunc. Pellentesque in lacus
            odio. Maecenas scelerisque ligula sed commodo porttitor. Praesent id
            tortor ut nisl blandit suscipit ac vitae nisl. Suspendisse pharetra
            nisi in eleifend dapibus. Pellentesque sed eros vehicula,
            consectetur augue at, sodales lectus. Morbi dapibus, ipsum eu tempus
            lacinia, lectus lectus posuere erat, at tristique nulla libero sit
            amet eros. Nam pretium diam nec luctus feugiat.
          </p>
          <p>
            Nunc tristique cursus feugiat. Ut ut neque vitae ligula semper
            vulputate id venenatis quam. Aenean quis augue lectus. Donec non
            purus nunc. Sed porttitor vitae lorem eu maximus. Curabitur sit amet
            erat velit. Vivamus id magna vehicula tortor faucibus tempus
            consectetur in est. Donec venenatis sapien sed sem bibendum
            fermentum. Ut vulputate orci et tristique placerat. Vestibulum
            dictum euismod metus, at tincidunt erat tincidunt interdum. Morbi
            vel orci et dui volutpat vestibulum. Mauris at suscipit metus.
          </p>
          <p>
            Etiam sollicitudin magna ut fermentum efficitur. Aenean iaculis,
            orci non rutrum ultricies, orci nibh porttitor elit, id viverra urna
            lectus id neque. Cras porta, tellus at lobortis facilisis, ante
            lectus consectetur massa, sit amet convallis mi urna in neque. Duis
            pharetra enim eu leo tincidunt, sed aliquam purus pharetra.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Phasellus ullamcorper sodales erat, sit
            amet vestibulum lorem sagittis eu. Mauris lobortis suscipit
            venenatis. Vivamus ac urna lobortis, euismod purus at, cursus
            tellus. Aenean id ligula rhoncus, pharetra velit blandit, pretium
            magna. Integer hendrerit dui at ante imperdiet, nec consequat massa
            faucibus. Phasellus in bibendum ligula. Proin pharetra commodo augue
            quis congue. Sed id tristique odio.
          </p>
          <p>
            Phasellus vitae feugiat lorem. Vestibulum vitae feugiat sapien,
            imperdiet blandit mi. Vivamus ac ante leo. Ut porta, dui ut congue
            sollicitudin, orci justo cursus libero, et vulputate dolor lacus eu
            odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pulvinar, odio vel rhoncus posuere, nibh augue eleifend ipsum,
            eleifend luctus nisi odio scelerisque velit. Cras id auctor lorem.
            Donec eu elit nibh. In nec fringilla eros, non venenatis lacus.
            Pellentesque ut tellus gravida arcu pellentesque commodo. Vestibulum
            et metus magna. Aenean lacinia tortor ac malesuada facilisis. Cras
            suscipit posuere nisl ut feugiat. Duis nunc nunc, euismod ut velit
            non, maximus pulvinar turpis.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
