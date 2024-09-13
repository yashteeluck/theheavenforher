import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const SpecialOffer = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Array of JSDelivr links to your texts
  const textLinks = [
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/100_240912_181622.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/101_240912_183512.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/102_240912_183648.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/103_240912_184331.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/104_240912_184751.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/105_240912_191333.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/106_240912_191538.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/107_240912_191806.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/108_240912_191913.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/109_240912_192109.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/10_240912_135652.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/110_240912_192323.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/111_240912_192543.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/112_240912_192733.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/113_240912_192929.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/11_240912_135811.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/12_240912_135910.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/13_240912_135954.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/14_240912_140156.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/15_240912_144544.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/16_240912_144656.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/17_240912_144825.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/18_240912_144929.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/19_240912_145116.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/1_240911_092605.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/1_240912_121510.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/20.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/20_240912_145224.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/21.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/21_240912_150616.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/22_240912_150426.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/23_240912_150527.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/24_240912_150752.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/25_240912_151253.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/26_240912_151032.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/27_240912_151109.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/28_240912_151427.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/29_240912_151350.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/2_240911_093549.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/30_240912_151713.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/2_240912_131130.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/31_240912_152120.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/32_240912_152956.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/33_240912_153055.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/34_240912_153300.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/35_240912_153339.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/36_240912_153427.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/37_240912_153646.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/38_240912_153551.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/39_240912_153656.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/3_240912_131522.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/3_240912_132406.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/40_240912_154030.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/41_240912_154118.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/42_240912_154925.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/43_240912_155329.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/44_240912_155438.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/45_240912_155654.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/46_240912_155800.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/47_240912_155900.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/48_240912_160007.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/49_240912_160054.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/4_240912_131845.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/4_240912_134859.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/50_240912_160149.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/51_240912_160239.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/52_240912_160349.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/53_240912_160515.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/54_240912_160834.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/55_240912_161054.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/56_240912_161244.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/57_240912_161336.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/58_240912_164624.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/59_240912_164746.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/5_240912_135209.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/60_240912_165622.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/61_240912_165736.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/62_240912_165838.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/63_240912_165948.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/64_240912_170118.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/65_240912_170131.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/66_240912_170214.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/67_240912_170534.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/68_240912_170637.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/69_240912_170750.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/6_240912_135312.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/70_240912_170856.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/71_240912_170945.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/72_240912_171139.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/73_240912_171327.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/74_240912_171453.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/75_240912_172016.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/76_240912_172306.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/77_240912_172350.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/78_240912_172528.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/79_240912_172642.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/7_240912_135438.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/80_240912_172810.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/81_240912_172909.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/82_240912_173014.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/83_240912_173117.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/84_240912_173204.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/85_240912_173429.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/86_240912_173612.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/87_240912_173716.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/88_240912_173831.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/89_240912_174039.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/8_240912_135502.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/90_240912_174157.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/91_240912_174452.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/92_240912_175419.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/93_240912_175606.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/94_240912_175701.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/95_240912_175819.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/96_240912_175935.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/97_240912_180141.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/98_240912_180303.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/99_240912_180439.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/9_240912_135556.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/A%20butterfly%20is%20a%20delicate%20and%20graceful%20creature.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/A%20constellation%20is%20a%20pattern%20of%20stars%20that%20forms%20a.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/A%20cup%20of%20hot%20cocoa%20on%20a%20winter.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/A%20dove%20is%20a%20symbol%20of%20peace.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/A%20dream%20is%20a%20beautiful%20and%20often%20surreal%20experienc.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/A%20firefly%20is%20a%20small.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/A%20gentle%20stream%20is%20a%20serene%20and%20soothing%20presence.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/A%20golden%20autumn%20leaf%20is%20a%20symbol%20of%20transition.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/A%20lighthouse%20on%20a%20foggy%20night%20stands%20as%20a%20steadfas.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/A%20masterpiece%20is%20a%20creation%20of%20exceptional%20quality.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/A%20heartbeat%20is%20a%20fundamental%20and%20vital%20rhythm%20that.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/A%20melody%20that%20stays%20with%20you%20forever%20is%20a%20beautifu.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/A%20pearl%20is%20a%20precious%20gem%20formed%20through%20the%20natur.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/A%20precious%20memory%20is%20a%20cherished%20moment%20from%20the%20p.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/A%20rainbow%20is%20a%20breathtaking%20natural%20phenomenon%20tha.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/A%20rare%20book%20is%20a%20treasure%20trove%20of%20knowledge.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/A%20secret%20garden%20is%20a%20place%20of%20enchanting%20beauty.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/A%20snowflake%20is%20a%20unique%20and%20intricate%20creation%20of.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/A%20sunset%20is%20a%20spectacular%20daily%20event.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/A%20timeless%20painting%20is%20a%20masterpiece%20that%20captivat.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/A%20waterfall%20is%20a%20magnificent%20natural%20wonder.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/A%20whisper%20of%20the%20wind%20is%20a%20gentle%20and%20subtle%20force.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/A%20wildflower%20is%20a%20symbol%20of%20freedom.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/Being%20with%20you%20is%20like%20beholding%20a%20masterpiece.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/Being%20with%20you%20is%20like%20discovering%20a%20secret%20garden.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/Being%20with%20you%20is%20like%20listening%20to%20a%20song%20that%20ge.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/Delicate%20lace%20is%20a%20beautiful%20and%20intricate%20fabric.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/Document1.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/In%20the%20early%20moments%20of%20the%20day.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/In%20the%20realm%20of%20beauty%20and%20rarity.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/The%20first%20bloom%20of%20spring%20represents%20new%20beginning.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/The%20golden%20hour%20is%20a%20magical%20time%20just%20before%20suns.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/The%20soft%20glow%20of%20candlelight%20creates%20a%20warm.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/The%20warmth%20of%20the%20sun%20on%20a%20cold%20morning%20is%20a%20pheno.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/Welcome%20back%20another%20day%20our%20one%20and%20only%20angel%20in.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/Welcome%20my%20dear%20angel.txt",
"https://cdn.jsdelivr.net/gh/yashteeluck/Angeldom@main/Welcome%20once%20again%20our%20dear%20angel.txt",
  ];

  useEffect(() => {
    const fetchText = async (index) => {
      try {
        const response = await fetch(textLinks[index]);
        const data = await response.text();
        console.log("Fetched text:", data); // Log the fetched text
        setCurrentText(data); // Set the fetched text
      } catch (error) {
        console.error("Error fetching the text:", error);
      }
    };

    const calculateCurrentIndex = () => {
      const startTime = localStorage.getItem("startTime");
      let now = new Date().getTime();

      // If it's the first visit, set the current time
      if (!startTime) {
        localStorage.setItem("startTime", now);
      }

      // Calculate how many 24-hour intervals have passed
      const timeElapsed = now - (startTime || now);
      const daysPassed = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));

      // Update the currentIndex based on how many days have passed
      return daysPassed % textLinks.length;
    };

    // Set the initial text when the component mounts
    const index = calculateCurrentIndex();
    setCurrentIndex(index);
    fetchText(index); // Fetch the text immediately after setting the index

    // Set an interval to update the text every 24 hours (86400000 ms = 24 hours)
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % textLinks.length; // Update the index every 24 hours
      setCurrentIndex(nextIndex); // Update state
      fetchText(nextIndex); // Fetch the new text
    }, 86400000); // 24 hours

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [textLinks, currentIndex]);

  return (
    <div className="special-offer-container" style={styles.container}>
      <button style={styles.button} onClick={() => navigate('/dashboard')}>
        Go to Dashboard
      </button>
      <h1>Your Daily Reminder</h1>
      <div className="text-box" style={styles.textBox}>
        {currentText ? (
          <p>{currentText}</p> // Display the fetched text
        ) : (
          <p>Loading...</p> // Display while the text is being fetched
        )}
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    position: "relative", // Ensure that the button's position is relative to the container
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
  },
  button: {
    position: "absolute",
    top: "20px", // Adjust the top margin as needed
    left: "10px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  textBox: {
    width: "80%",
    height: "400px", // Set the height of the box
    overflowY: "scroll", // Enable vertical scrolling
    padding: "20px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    color: "#333",
  },
};

export default SpecialOffer;
