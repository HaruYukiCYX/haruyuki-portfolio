// Confirmed public details only. Blank personal links stay hidden.
window.PORTFOLIO = {
  name: 'Yuxuan Chen', email: '', linkedin: '', github: '', cv: '',
  education: {
    mastersDates: 'Sep 2026 – Sep 2027 (expected)',
    bachelorInstitution: 'Nanjing University of Information Science & Technology',
    bachelorDegree: 'BSc, Internet of Things Engineering · Dual-degree programme',
    bachelorDates: 'Sep 2022 – Jun 2026'
  },
  projects: {
    yeemeDates: '',
    roboticsDates: 'Jul 2024 – Jun 2026',
    roboticsTitle: 'Myzooids — swarm robotics',
    roboticsDescription: '',
    roboticsUrl: ''
  },
  // Put the supplied images in assets/, then add their relative paths below.
  // Each main image appears in both the project card and its case study.
  images: {
    yeemeShowcase: 'assets/yeeme-device-transparent.png', yeemeMain: 'assets/yeeme-desktop.png', yeemeDetail: 'assets/yeeme-app-original.png', roboticsMain: 'assets/myzooids-in-hand.jpg', roboticsVision: 'assets/myzooids-vision.png', roboticsSchematic: 'assets/myzooids-schematic.png', roboticsStructure: 'assets/myzooids-structure.png', roboticsPcb: 'assets/myzooids-pcb.png', roboticsController: 'assets/myzooids-controller.png', roboticsProgramming: 'assets/myzooids-programming.png', roboticsDetail: 'assets/myzooids-electronics.jpg', roboticsEnclosure: 'assets/myzooids-enclosure.jpg'
  },
  imageAlts: {
    yeemeShowcase: 'YeeMe desktop website and mobile app in a three-dimensional device mockup', yeemeMain: 'YeeMe English desktop homepage', yeemeDetail: 'YeeMe mobile app screen supplied by the author', roboticsVision: 'ArUco recognition running on an Android screen with marker ID 0 and a distance reading', roboticsSchematic: 'Robot schematic showing voltage regulation, charging, motor controller, IMU and STM32 MCU', roboticsStructure: 'Exploded 3D robot assembly showing PCB, battery, motor bracket, wheels and chassis', roboticsPcb: 'Three-dimensional circular PCB layout from the project report', roboticsController: 'Android robot control interface with Bluetooth connection and directional controls', roboticsProgramming: 'ST-Link and TC2030 programming cable connected to the robot PCB', roboticsMain: 'Assembled orange Myzooids robot held in a hand, showing its compact size and visual marker', roboticsDetail: 'Myzooids with its top cover removed, showing the assembled PCB and illuminated status LED', roboticsEnclosure: 'Completed Myzooids enclosure with a top-mounted visual marker and exposed USB connector'
  }
};
