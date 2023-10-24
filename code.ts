/* function currentSelection() {
  const selection = figma.currentPage.selection;
    if (selection.length === 0) {
      figma.showUI(
        "<b>Please select an Overlay Dorado and run again</b>",
        { width: 400, height: 200, title: "Overlay Dorado Precheck Tool" }
      );    
    }
}

currentSelection(); */

function createPage() {
  const pageOverlayTool = figma.createPage();
  pageOverlayTool.name = 'Overlay Dorado Precheck Tool';
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
  frame1.name = "iPhone SE";
  frame1.resizeWithoutConstraints(320, 568);
  frame1.x = component.x + component.width + 200;
  //frame1.locked = true;

  const frame2 = figma.createFrame();
  frame2.name = "iPhone 14";
  frame2.resizeWithoutConstraints(390, 844);
  frame2.x = frame1.x + frame1.width + 200;
  //frame2.locked = true;

  const frame3 = figma.createFrame();
  frame3.name = "iPhone 14 Pro";
  frame3.resizeWithoutConstraints(393, 852);
  frame3.x = frame2.x + frame2.width + 200;
  //frame3.locked = true;

  const frame4 = figma.createFrame();
  frame4.name = "iPhone 14 Plus";
  frame4.resizeWithoutConstraints(428, 926);
  frame4.x = frame3.x + frame3.width + 200;
  //frame4.locked = true;

  const frame5 = figma.createFrame();
  frame5.name = "iPhone 14 Pro Max";
  frame5.resizeWithoutConstraints(430, 932);
  frame5.x = frame4.x + frame4.width + 200;
  //frame5.locked = true;

  const frame6 = figma.createFrame();
  frame6.name = "Android Small";
  frame6.resizeWithoutConstraints(360, 640);
  frame6.x = frame5.x + frame5.width + 200;
  //frame6.locked = true;

  const frame7 = figma.createFrame();
  frame7.name = "Android Large";
  frame7.resizeWithoutConstraints(360, 800);
  frame7.x = frame6.x + frame6.width + 200;
  //frame7.locked = true;

  const instanceTall = [];
  for (const frame of [frame2, frame3, frame4, frame5, frame7]) {
    const instance = component.createInstance();
    frame.appendChild(instance);
    instanceTall.push(instance);

    const scaleFactor = frame.height / instance.height;
    instance.rescale(scaleFactor);
    instance.x = (-((instance.width - frame.width) / 2));
  }

  const instanceWide = [];
  for (const frame of [frame1, frame6]) {
    const instance = component.createInstance();
    frame.appendChild(instance);
    instanceWide.push(instance);

    const scaleFactor = frame.width / instance.width;
    instance.rescale(scaleFactor);
    instance.y = (-((instance.height - frame.height) / 2));
  }

  const createCTAButtonSE = [];
  for (const frame of [frame1]) {
    const ctaButtonSE = figma.createFrame();
    ctaButtonSE.name = "CTA Button";
    ctaButtonSE.fills = [{ type: 'SOLID', color: { r: 0.99, g: 0.32, b: 0 } }]
    ctaButtonSE.primaryAxisSizingMode = 'FIXED';
    ctaButtonSE.layoutMode = "VERTICAL";
    ctaButtonSE.cornerRadius = 4;
    ctaButtonSE.primaryAxisAlignItems = "CENTER";
    ctaButtonSE.counterAxisAlignItems = "CENTER";
    ctaButtonSE.resizeWithoutConstraints(frame.width - 32, 53);
    const ctaText = figma.createText();
    ctaText.characters = "CTA Button";
    ctaText.fontSize = ctaButtonSE.height / 3;
    ctaText.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
    ctaButtonSE.appendChild(ctaText);
    frame.appendChild(ctaButtonSE);
    createCTAButtonSE.push(ctaButtonSE);
    ctaButtonSE.x = frame.width - ctaButtonSE.width - 16;
    ctaButtonSE.y = frame.height - ctaButtonSE.height - 16;
  }

  const createCTAButtonNotch = [];
  for (const frame of [frame2, frame3, frame4, frame5]) {
    const ctaButtonNotch = figma.createFrame();
    ctaButtonNotch.name = "CTA Button";
    ctaButtonNotch.fills = [{ type: 'SOLID', color: { r: 0.99, g: 0.32, b: 0 } }]
    ctaButtonNotch.primaryAxisSizingMode = 'FIXED';
    ctaButtonNotch.layoutMode = "VERTICAL";
    ctaButtonNotch.cornerRadius = 4;
    ctaButtonNotch.primaryAxisAlignItems = "CENTER";
    ctaButtonNotch.counterAxisAlignItems = "CENTER";
    ctaButtonNotch.resizeWithoutConstraints(frame.width - 32, 53);
    const ctaText = figma.createText();
    ctaText.characters = "CTA Button";
    ctaText.fontSize = ctaButtonNotch.height / 3;
    ctaText.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
    ctaButtonNotch.appendChild(ctaText);
    frame.appendChild(ctaButtonNotch);
    createCTAButtonNotch.push(ctaButtonNotch);
    ctaButtonNotch.x = frame.width - ctaButtonNotch.width - 16;
    ctaButtonNotch.y = frame.height - ctaButtonNotch.height - 50;
  }

  const createCTAButton = [];
  for (const frame of [frame6, frame7]) {
    const ctaButton = figma.createFrame();
    ctaButton.name = "CTA Button";
    ctaButton.fills = [{ type: 'SOLID', color: { r: 0.99, g: 0.32, b: 0 } }]
    ctaButton.primaryAxisSizingMode = 'FIXED';
    ctaButton.layoutMode = "VERTICAL";
    ctaButton.cornerRadius = 4;
    ctaButton.primaryAxisAlignItems = "CENTER";
    ctaButton.counterAxisAlignItems = "CENTER";
    ctaButton.resizeWithoutConstraints(frame.width - 42, 44);
    const ctaText = figma.createText();
    ctaText.characters = "CTA Button";
    ctaText.fontSize = ctaButton.height / 3;
    ctaText.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
    ctaButton.appendChild(ctaText);
    frame.appendChild(ctaButton);
    createCTAButton.push(ctaButton);
    ctaButton.x = frame.width - ctaButton.width - 21;
    ctaButton.y = frame.height - ctaButton.height - 21;
  }

  const createCloseNotchless = [];
  for (const frame of [frame1, frame6, frame7]) {
    const closeNotchless = figma.createFrame();
    closeNotchless.name = "Close Icon";
    closeNotchless.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]
    closeNotchless.strokes = [{ type: 'SOLID', color: { r: 0.8274, g: 0.8196, b: 0.8039 } }]
    closeNotchless.primaryAxisSizingMode = 'FIXED';
    closeNotchless.layoutMode = "VERTICAL";
    closeNotchless.cornerRadius = 40;
    closeNotchless.primaryAxisAlignItems = "CENTER";
    closeNotchless.counterAxisAlignItems = "CENTER";
    closeNotchless.resizeWithoutConstraints(40, 40);
    const closeText = figma.createText();
    closeText.characters = "X";
    closeText.fontSize = closeNotchless.height / 2;
    closeText.fills = [{ type: "SOLID", color: { r: 0.99, g: 0.32, b: 0 } }];
    closeNotchless.appendChild(closeText);
    frame.appendChild(closeNotchless);
    createCloseNotchless.push(closeNotchless);
    closeNotchless.x = frame.width - closeNotchless.width - 16;
    closeNotchless.y = 16;
  }

  const createCloseNotch = [];
  for (const frame of [frame2, frame3, frame4, frame5]) {
    const closeNotch = figma.createFrame();
    closeNotch.name = "Close Icon";
    closeNotch.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]
    closeNotch.strokes = [{ type: 'SOLID', color: { r: 0.8274, g: 0.8196, b: 0.8039 } }]
    closeNotch.primaryAxisSizingMode = 'FIXED';
    closeNotch.layoutMode = "VERTICAL";
    closeNotch.cornerRadius = 40;
    closeNotch.primaryAxisAlignItems = "CENTER";
    closeNotch.counterAxisAlignItems = "CENTER";
    closeNotch.resizeWithoutConstraints(40, 40);
    const closeText = figma.createText();
    closeText.characters = "X";
    closeText.fontSize = closeNotch.height / 2;
    closeText.fills = [{ type: "SOLID", color: { r: 0.99, g: 0.32, b: 0 } }];
    closeNotch.appendChild(closeText);
    frame.appendChild(closeNotch);
    createCloseNotchless.push(closeNotch);
    closeNotch.x = frame.width - closeNotch.width - 16;
    closeNotch.y = frame.height * 0.08;
  }

  figma.currentPage.selection = figma.currentPage.children;

  figma.viewport.scrollAndZoomIntoView(figma.currentPage.selection);

  figma.currentPage.selection = [];

  figma.closePlugin()

});