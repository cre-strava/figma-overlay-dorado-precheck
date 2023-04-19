function currentSelection() {
  const selection = figma.currentPage.selection;
    if (selection.length === 0) {
      figma.showUI(
        "<b>Please select an Overlay Dorado and run again</b>",
        { width: 400, height: 200, title: "Overlay Dorado Precheck Tool" }
      );    
    }
}

currentSelection();

function createPage() {
  const pageOverlayTool = figma.createPage();
  pageOverlayTool.name = 'Overlay Dorado Tool';
  figma.currentPage = pageOverlayTool;
}

createPage();

async function loadFont() {
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
}

loadFont().then(() => {
  const component = figma.createComponent();
  component.name = 'Overlay Dorado Precheck Tool';
  component.resizeWithoutConstraints(1242, 2209);
  component.fills = [{ type: 'SOLID', color: { r: 1, g: 0.79, b: 0.36 } }];
  component.layoutMode = 'VERTICAL';
  component.primaryAxisSizingMode = 'FIXED';

  const frame1 = figma.createFrame();
  frame1.name = "iPhone 14";
  frame1.resizeWithoutConstraints(390, 844);
  frame1.x = component.x + component.width + 200;
  frame1.locked = true;

  const frame2 = figma.createFrame();
  frame2.name = "iPhone 14 Pro";
  frame2.resizeWithoutConstraints(393, 852);
  frame2.x = frame1.x + frame1.width + 200;
  frame2.locked = true;

  const frame3 = figma.createFrame();
  frame3.name = "iPhone 14 Plus";
  frame3.resizeWithoutConstraints(428, 926);
  frame3.x = frame2.x + frame2.width + 200;
  frame3.locked = true;

  const frame4 = figma.createFrame();
  frame4.name = "iPhone 14 Pro Max";
  frame4.resizeWithoutConstraints(430, 932);
  frame4.x = frame3.x + frame3.width + 200;
  frame4.locked = true;

  const frame5 = figma.createFrame();
  frame5.name = "iPhone 13 Pro Max";
  frame5.resizeWithoutConstraints(428, 926);
  frame5.x = frame4.x + frame4.width + 200;
  frame5.locked = true;

  const frame6 = figma.createFrame();
  frame6.name = "iPhone 13 / 13 Pro";
  frame6.resizeWithoutConstraints(390, 844);
  frame6.x = frame5.x + frame5.width + 200;
  frame6.locked = true;

  const frame7 = figma.createFrame();
  frame7.name = "iPhone 8";
  frame7.resizeWithoutConstraints(375, 667);
  frame7.x = frame6.x + frame6.width + 200;
  frame7.locked = true;

  const frame8 = figma.createFrame();
  frame8.name = "Android Large";
  frame8.resizeWithoutConstraints(360, 800);
  frame8.x = frame1.x;
  frame8.y = frame1.y + frame1.height + 400;
  frame8.locked = true;

  const frame9 = figma.createFrame();
  frame9.name = "Android Small";
  frame9.resizeWithoutConstraints(320, 640);
  frame9.x = frame8.x + frame8.width + 200;
  frame9.y = frame8.y;
  frame9.locked = true;

  const instances = [];
  for (const frame of [frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9]) {
    const instance = component.createInstance();
    frame.appendChild(instance);
    instances.push(instance);

    const scaleFactor = frame.height / instance.height;
    instance.rescale(scaleFactor);
    instance.x = (-((instance.width - frame.width) / 2));
  }

  const createCTAButton = [];
  for (const frame of [frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9]) {
    const ctaButton = figma.createFrame();
    ctaButton.name = "CTA Button";
    ctaButton.fills = [{ type: 'SOLID', color: { r: 0.99, g: 0.32, b: 0 } }]
    ctaButton.primaryAxisSizingMode = 'FIXED';
    ctaButton.layoutMode = "VERTICAL";
    ctaButton.primaryAxisAlignItems = "CENTER";
    ctaButton.counterAxisAlignItems = "CENTER";
    ctaButton.resizeWithoutConstraints(frame.width, frame.height * 0.08);
    const ctaText = figma.createText();
    ctaText.characters = "CTA Button";
    ctaText.fontSize = ctaButton.height / 3;
    ctaText.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
    ctaButton.appendChild(ctaText);
    frame.appendChild(ctaButton);
    createCTAButton.push(ctaButton);
    ctaButton.y = frame.height - ctaButton.height;
  }

  const createLogo = [];
  for (const frame of [frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9]) {
    const stravaLogo = figma.createEllipse();
    stravaLogo.name = "Logo";
    stravaLogo.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]
    stravaLogo.constraints = { horizontal: "MIN", vertical: "MIN" };
    stravaLogo.constrainProportions = true
    stravaLogo.resize(frame.width * 0.1, frame.width * 0.1);
    frame.appendChild(stravaLogo);
    createCTAButton.push(stravaLogo);
    stravaLogo.y = 62;
    stravaLogo.x = 16;
  }

  const createAndroidClose = [];
  for (const android of [frame8, frame9]) {
    const androidClose = figma.createEllipse();
    androidClose.name = "Logo";
    androidClose.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }]
    androidClose.constraints = { horizontal: "MIN", vertical: "MIN" };
    androidClose.constrainProportions = true
    androidClose.resize(android.width * 0.1, android.width * 0.1);
    android.appendChild(androidClose);
    createCTAButton.push(androidClose);
    androidClose.y = 62;
    androidClose.x = android.width - androidClose.width - 16;
  }

  const createiOSClose = [];
  for (const iOS of [frame1, frame2, frame3, frame4, frame5, frame6, frame7]) {
    const iOSClose = figma.createText();
    iOSClose.characters = "Close";
    iOSClose.resize(iOS.height * 0.1, iOS.width * 0.1);
    iOSClose.fontSize = 0.025 * iOS.height;
    iOSClose.fills = [{ type: 'SOLID', color: { r: 0.99, g: 0.32, b: 0 } }]
    iOSClose.constraints = { horizontal: "MAX", vertical: "MIN" };
    iOSClose.textAlignHorizontal = "RIGHT";
    iOSClose.textAlignVertical = "CENTER";
    iOS.appendChild(iOSClose);
    iOSClose.x = (iOS.width - iOSClose.width) - 16;
    iOSClose.y = 62;
  }

  figma.currentPage.selection = figma.currentPage.children;

  figma.viewport.scrollAndZoomIntoView(figma.currentPage.selection);

  figma.currentPage.selection = [];

  figma.closePlugin()

});