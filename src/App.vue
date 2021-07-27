<template>
  <div id="app">
    <Header/>
    <OurStory/>
    <Video/>
    <Expertise/>
    <Team/>
    <OurWorks/>
    <Review/>
    <feedback/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import OurStory from "@/components/Sections/About/OurStory";
import Video from "@/components/Sections/About/Video";
import Expertise from "@/components/Sections/Expertise";
import Team from "@/components/Sections/Team";
import OurWorks from "@/components/Sections/OurWorks";
import Review from "@/components/Sections/Review";
import Feedback from "@/components/Sections/Feedback";
import Footer from "@/components/Footer";


export default {
  components: {
    Footer,
    Feedback,
    Review,
    OurWorks,
    Team,
    Expertise,
    Video,
    OurStory,
    Header,
  }
}
</script>