<template>
    <div class="wrapper">
        <!-- 背景图片 -->
        <div class="back_bg"></div>
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide class="slide">
                <div class="wrapper_audio">
                    <audio class="audio_music" loop title="薛之谦" src="//musicugc.qianqian.com/ugcdiy/audio/eecc3350288c4c264f4f62a532252c98.mp3"></audio>
                    <audio class="audio_music" loop title="许嵩" src="//musicugc.qianqian.com/ugcdiy/audio/efb3e5ea09ad09bd69cd5f54d4c8e7b1.mp3"></audio>
                    <audio class="audio_music" loop title="李志" src="//musicugc.qianqian.com/ugcdiy/audio/5854fea3e90a0e7833b4b097a64bded5.mp3"></audio>
                    <audio class="audio_music" loop title="徐佳莹" src="//musicugc.qianqian.com/ugcdiy/audio/a73e8038f5761e6e926e8e88080b3178.mp3"></audio>
                    <audio class="audio_music" loop title="陈洁仪" src="//musicugc.qianqian.com/ugcdiy/audio/1b952424578d0901f39770f5961599b4.mp3"></audio>
                    <audio class="audio_music" loop title="戴荃" src="//musicugc.qianqian.com/ugcdiy/audio/f871b82c5520df17a1e76e90c6553000.mp3"></audio>
                    <audio class="audio_music" loop title="尹毓恪" src="//musicugc.qianqian.com/ugcdiy/audio/f99de049066663b43df5c4eaa3df154e.mp3"></audio>
                </div>
                <div class="back">
                    <div class="star_wrapper">
                        <div class="star xzq"></div>
                        <img class="back_x" src="//static0.qianqian.com/tms/download/static/spring/back_x.png" alt="">
                        <img class="back_none" src="//static0.qianqian.com/tms/download/static/spring/back_none.png" alt="">
                    </div>
                    <div class="operation">
                        <div class="operation_inner">
                            <img class="back_x" src="//static0.qianqian.com/tms/download/static/spring/back_x.png" alt="">
                            <img class="back_none" src="//static0.qianqian.com/tms/download/static/spring/back_none.png" alt="">
                            <div class="details_button" @click="details_show"></div>
                            <div v-if="!andOrIos">
                                <div v-if="play_status" class="music_button" @click="music_stop"></div>
                                <div v-else class="stop_button" @click="music_play"></div>
                                <div v-show="!play_ok" class="first" @click="all_play"></div>
                                <div v-show="!play_ok" class="first_message" @click="all_play"></div>
                            </div>
                            <div v-else>
                                <div v-if="play_status" class="and_music_button" @click="music_stop"></div>
                                <div v-else class="and_stop_button" @click="music_play"></div>
                            </div>
                            <div class="share_button" @click="share_show"></div>
                            <div class="bag_button" @click="bag_open('薛之谦')"></div>
                            <div class="logo_img"></div>
                            <div class="swiper-button-next" slot="button-next"></div>
                            <div class="next"></div>
                            <div class="pre"></div>
                        </div>
                    </div>
                    <transition name="fade">
                        <div class="details" v-show="isShow">
                            <div class="details_inner">
                                <img class="details_img" src="//static0.qianqian.com/tms/download/static/spring/details1.png" alt="">
                                <div @click="details_close" class="details_close"></div>
                            </div>
                        </div>
                    </transition>
                </div>
            </swiper-slide>
            <swiper-slide class="slide">
                <div class="back">
                    <div class="star_wrapper">
                        <div class="star xs"></div>
                        <img class="back_x" src="//static0.qianqian.com/tms/download/static/spring/back_x.png" alt="">
                        <img class="back_none" src="//static0.qianqian.com/tms/download/static/spring/back_none.png" alt="">
                    </div>
                    <div class="operation">
                        <div class="operation_inner">
                            <img class="back_x" src="//static0.qianqian.com/tms/download/static/spring/back_x.png" alt="">
                            <img class="back_none" src="//static0.qianqian.com/tms/download/static/spring/back_none.png" alt="">
                            <div class="details_button" @click="details_show"></div>
                            <div v-if="!andOrIos">
                                <div v-if="play_status" class="music_button" @click="music_stop"></div>
                                <div v-else class="stop_button" @click="music_play"></div>
                                <div v-show="!play_ok" class="first" @click="all_play"></div>
                                <div v-show="!play_ok" class="first_message" @click="all_play"></div>
                            </div>
                            <div v-else>
                                <div v-if="play_status" class="and_music_button" @click="music_stop"></div>
                                <div v-else class="and_stop_button" @click="music_play"></div>
                            </div>
                            <div class="share_button" @click="share_show"></div>
                            <div class="bag_button" @click="bag_open('许嵩')"></div>
                            <div class="logo_img"></div>
                            <div class="swiper-button-prev" slot="button-prev"></div>
                            <div class="swiper-button-next" slot="button-next"></div>
                        </div>
                    </div>
                    <transition name="fade">
                        <div class="details" v-show="isShow">
                            <div class="details_inner">
                                <img class="details_img" src="//static0.qianqian.com/tms/download/static/spring/details1.png" alt="">
                                <div @click="details_close" class="details_close"></div>
                            </div>
                        </div>
                    </transition>
                </div>
            </swiper-slide>
            <swiper-slide class="slide">
                <div class="back">
                    <div class="star_wrapper">
                        <div class="star lz"></div>
                        <img class="back_x" src="//static0.qianqian.com/tms/download/static/spring/back_x.png" alt="">
                        <img class="back_none" src="//static0.qianqian.com/tms/download/static/spring/back_none.png" alt="">
                    </div>
                    <div class="operation">
                        <div class="operation_inner">
                            <img class="back_x" src="//static0.qianqian.com/tms/download/static/spring/back_x.png" alt="">
                            <img class="back_none" src="//static0.qianqian.com/tms/download/static/spring/back_none.png" alt="">
                            <div class="details_button" @click="details_show"></div>
                            <div v-if="!andOrIos">
                                <div v-if="play_status" class="music_button" @click="music_stop"></div>
                                <div v-else class="stop_button" @click="music_play"></div>
                                <div v-show="!play_ok" class="first" @click="all_play"></div>
                                <div v-show="!play_ok" class="first_message" @click="all_play"></div>
                            </div>
                            <div v-else>
                                <div v-if="play_status" class="and_music_button" @click="music_stop"></div>
                                <div v-else class="and_stop_button" @click="music_play"></div>
                            </div>
                            <div class="share_button" @click="share_show"></div>
                            <div class="bag_button" @click="bag_open('李志')"></div>
                            <div class="logo_img"></div>
                            <div class="swiper-button-prev" slot="button-prev"></div>
                            <div class="swiper-button-next" slot="button-next"></div>
                        </div>
                    </div>
                    <transition name="fade">
                        <div class="details" v-show="isShow">
                            <div class="details_inner">
                                <img class="details_img" src="//static0.qianqian.com/tms/download/static/spring/details1.png" alt="">
                                <div @click="details_close" class="details_close"></div>
                            </div>
                        </div>
                    </transition>
                </div>
            </swiper-slide>
            <swiper-slide class="slide">
                <div class="back">
                    <div class="star_wrapper">
                        <div class="star xjy"></div>
                        <img class="back_x" src="//static0.qianqian.com/tms/download/static/spring/back_x.png" alt="">
                        <img class="back_none" src="//static0.qianqian.com/tms/download/static/spring/back_none.png" alt="">
                    </div>
                    <div class="operation">
                        <div class="operation_inner">
                            <img class="back_x" src="//static0.qianqian.com/tms/download/static/spring/back_x.png" alt="">
                            <img class="back_none" src="//static0.qianqian.com/tms/download/static/spring/back_none.png" alt="">
                            <div class="details_button" @click="details_show"></div>
                            <div v-if="!andOrIos">
                                <div v-if="play_status" class="music_button" @click="music_stop"></div>
                                <div v-else class="stop_button" @click="music_play"></div>
                                <div v-show="!play_ok" class="first" @click="all_play"></div>
                                <div v-show="!play_ok" class="first_message" @click="all_play"></div>
                            </div>
                            <div v-else>
                                <div v-if="play_status" class="and_music_button" @click="music_stop"></div>
                                <div v-else class="and_stop_button" @click="music_play"></div>
                            </div>
                            <div class="share_button" @click="share_show"></div>
                            <div class="bag_button" @click="bag_open('徐佳莹')"></div>
                            <div class="logo_img"></div>
                            <div class="swiper-button-prev" slot="button-prev"></div>
                            <div class="swiper-button-next" slot="button-next"></div>
                        </div>
                    </div>
                    <transition name="fade">
                        <div class="details" v-show="isShow">
                            <div class="details_inner">
                                <img class="details_img" src="//static0.qianqian.com/tms/download/static/spring/details1.png" alt="">
                                <div @click="details_close" class="details_close"></div>
                            </div>
                        </div>
                    </transition>
                </div>
            </swiper-slide>
            <swiper-slide class="slide">
                <div class="back">
                    <div class="star_wrapper">
                        <div class="star cjy"></div>
                        <img class="back_x" src="//static0.qianqian.com/tms/download/static/spring/back_x.png" alt="">
                        <img class="back_none" src="//static0.qianqian.com/tms/download/static/spring/back_none.png" alt="">
                    </div>
                    <div class="operation">
                        <div class="operation_inner">
                            <img class="back_x" src="//static0.qianqian.com/tms/download/static/spring/back_x.png" alt="">
                            <img class="back_none" src="//static0.qianqian.com/tms/download/static/spring/back_none.png" alt="">
                            <div class="details_button" @click="details_show"></div>
                            <div v-if="!andOrIos">
                                <div v-if="play_status" class="music_button" @click="music_stop"></div>
                                <div v-else class="stop_button" @click="music_play"></div>
                                <div v-show="!play_ok" class="first" @click="all_play"></div>
                                <div v-show="!play_ok" class="first_message" @click="all_play"></div>
                            </div>
                            <div v-else>
                                <div v-if="play_status" class="and_music_button" @click="music_stop"></div>
                                <div v-else class="and_stop_button" @click="music_play"></div>
                            </div>
                            <div class="share_button" @click="share_show"></div>
                            <div class="bag_button" @click="bag_open('陈洁仪')"></div>
                            <div class="logo_img"></div>
                            <div class="swiper-button-prev" slot="button-prev"></div>
                            <div class="swiper-button-next" slot="button-next"></div>
                        </div>
                    </div>
                    <transition name="fade">
                        <div class="details" v-show="isShow">
                            <div class="details_inner">
                                <img class="details_img" src="//static0.qianqian.com/tms/download/static/spring/details1.png" alt="">
                                <div @click="details_close" class="details_close"></div>
                            </div>
                        </div>
                    </transition>
                </div>
            </swiper-slide>
            <swiper-slide class="slide">
                <div class="back">
                    <div class="star_wrapper">
                        <div class="star dq"></div>
                        <img class="back_x" src="//static0.qianqian.com/tms/download/static/spring/back_x.png" alt="">
                        <img class="back_none" src="//static0.qianqian.com/tms/download/static/spring/back_none.png" alt="">
                    </div>
                    <div class="operation">
                        <div class="operation_inner">
                            <img class="back_x" src="//static0.qianqian.com/tms/download/static/spring/back_x.png" alt="">
                            <img class="back_none" src="//static0.qianqian.com/tms/download/static/spring/back_none.png" alt="">
                            <div class="details_button" @click="details_show"></div>
                            <div v-if="!andOrIos">
                                <div v-if="play_status" class="music_button" @click="music_stop"></div>
                                <div v-else class="stop_button" @click="music_play"></div>
                                <div v-show="!play_ok" class="first" @click="all_play"></div>
                                <div v-show="!play_ok" class="first_message" @click="all_play"></div>
                            </div>
                            <div v-else>
                                <div v-if="play_status" class="and_music_button" @click="music_stop"></div>
                                <div v-else class="and_stop_button" @click="music_play"></div>
                            </div>
                            <div class="share_button" @click="share_show"></div>
                            <div class="bag_button" @click="bag_open('戴荃')"></div>
                            <div class="logo_img"></div>
                            <div class="swiper-button-prev" slot="button-prev"></div>
                            <div class="swiper-button-next" slot="button-next"></div>
                        </div>
                    </div>
                    <transition name="fade">
                        <div class="details" v-show="isShow">
                            <div class="details_inner">
                                <img class="details_img" src="//static0.qianqian.com/tms/download/static/spring/details1.png" alt="">
                                <div @click="details_close" class="details_close"></div>
                            </div>
                        </div>
                    </transition>
                </div>
            </swiper-slide>
            <swiper-slide class="slide">
                <div class="back">
                    <div class="star_wrapper">
                        <div class="star yyk"></div>
                        <img class="back_x" src="//static0.qianqian.com/tms/download/static/spring/back_x.png" alt="">
                        <img class="back_none" src="//static0.qianqian.com/tms/download/static/spring/back_none.png" alt="">
                    </div>
                    <div class="operation">
                        <div class="operation_inner">
                            <img class="back_x" src="//static0.qianqian.com/tms/download/static/spring/back_x.png" alt="">
                            <img class="back_none" src="//static0.qianqian.com/tms/download/static/spring/back_none.png" alt="">
                            <div class="details_button" @click="details_show"></div>
                            <div v-if="!andOrIos">
                                <div v-if="play_status" class="music_button" @click="music_stop"></div>
                                <div v-else class="stop_button" @click="music_play"></div>
                                <div v-show="!play_ok" class="first" @click="all_play"></div>
                                <div v-show="!play_ok" class="first_message" @click="all_play"></div>
                            </div>
                            <div v-else>
                                <div v-if="play_status" class="and_music_button" @click="music_stop"></div>
                                <div v-else class="and_stop_button" @click="music_play"></div>
                            </div>
                            <div class="share_button" @click="share_show"></div>
                            <div class="bag_button" @click="bag_open('尹毓恪')"></div>
                            <div class="logo_img"></div>
                            <div class="swiper-button-prev" slot="button-prev"></div>
                            <div class="swiper-button-next" slot="button-next"></div>
                        </div>
                    </div>
                    <transition name="fade">
                        <div class="details" v-show="isShow">
                            <div class="details_inner">
                                <img class="details_img" src="//static0.qianqian.com/tms/download/static/spring/details1.png" alt="">
                                <div @click="details_close" class="details_close"></div>
                            </div>
                        </div>
                    </transition>
                </div>
            </swiper-slide>
            <swiper-slide class="slide">
                <div class="back">
                    <div class="star_wrapper">
                        <div class="star xzq"></div>
                        <img class="back_x" src="//static0.qianqian.com/tms/download/static/spring/back_x.png" alt="">
                        <img class="back_none" src="//static0.qianqian.com/tms/download/static/spring/back_none.png" alt="">
                    </div>
                    <div class="operation">
                        <div class="operation_inner">
                            <img class="back_x" src="//static0.qianqian.com/tms/download/static/spring/back_x.png" alt="">
                            <img class="back_none" src="//static0.qianqian.com/tms/download/static/spring/back_none.png" alt="">
                            <div class="details_button" @click="details_show"></div>
                            <div v-if="!andOrIos">
                                <div v-if="play_status" class="music_button" @click="music_stop"></div>
                                <div v-else class="stop_button" @click="music_play"></div>
                                <div v-show="!play_ok" class="first" @click="all_play"></div>
                                <div v-show="!play_ok" class="first_message" @click="all_play"></div>
                            </div>
                            <div v-else>
                                <div v-if="play_status" class="and_music_button" @click="music_stop"></div>
                                <div v-else class="and_stop_button" @click="music_play"></div>
                            </div>
                            <div class="share_button" @click="share_show"></div>
                            <div class="bag_button" @click="bag_open('薛之谦')"></div>
                            <div class="logo_img"></div>
                            <div class="swiper-button-next" slot="button-next"></div>
                        </div>
                    </div>
                    <transition name="fade">
                        <div class="details" v-show="isShow">
                            <div class="details_inner">
                                <img class="details_img" src="//static0.qianqian.com/tms/download/static/spring/details1.png" alt="">
                                <div @click="details_close" class="details_close"></div>
                            </div>
                        </div>
                    </transition>
                </div>
            </swiper-slide>
        </swiper>
        <div class="flame z100" id="iflame"></div>
    </div>
</template>
<script>
    import wechat from "@local/flow-wechat";
    import {
        swiper,
        swiperSlide
    } from "vue-awesome-swiper"
    import "swiper/dist/css/swiper.css"
    export default {
        name: "index",
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                andOrIos: true,
                play_ok: true,
                isShow: false,
                play_status: true,
                inNative: window.$$$.inNative,
                fzCount: 0,
                fzItem: {},
                swiperOption: {
                    direction: "vertical",
                    height: innerHeight,
                    // loop: true,
                    initialSlide: 0,
                    watchSlidesProgress: true,
                    touchAngle: 80,
                    on: {
                        init: function() {},
                        slideChangeTransitionEnd: function() {
                            var arrn = document.getElementsByClassName("swiper-button-next");
                            var arrp = document.getElementsByClassName("swiper-button-prev");
                            for (var k = 0; k < 6; k++) {
                                arrp[k].style.animationName = "none";
                            }
                            for (var w = 0; w < 7; w++) {
                                arrn[w].style.animationName = "none";
                            }
                            var arr = document.getElementsByClassName("audio_music");
                            window.index = this.realIndex;
                            if (this.realIndex != 7 && window.play_status == true) {
                                for (var i = 0; i < arr.length; i++) {
                                    arr[i].currentTime = 0;
                                    arr[i].pause();
                                }
                                arr[window.index].play();
                            } else {
                                if (window.play_status == true) {
                                    for (var j = 0; j < arr.length; j++) {
                                        arr[j].currentTime = 0;
                                        arr[j].pause();
                                    }
                                    arr[0].play();
                                    window.index = 0;
                                }
                            }
                        },
                        transitionEnd: function() {
                            if (this.realIndex == 7) {
                                setTimeout(() => {
                                    this.slideTo(0, 0, false);
                                }, 80)
                            }
                        },
                        progress: function(progress) {},
                        touchEnd: () => {
                            this.$data.isShow = false;
                        },
                        slideChange: () => {
                            // this.$data.play_status = true;
                            // window.play_status = true;
                        },
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }
                },
            }
        },
        computed: {
            // swiper() {}
        },
        created() {
            // alert("是否是Android：" + isAndroid);
            // alert("是否是iOS：" + isiOS);
            var data = new Date();
            var day = data.getDate();
            if (day == 5) {
                this.$data.swiperOption.initialSlide = 0;
            } else if (day == 6) {
                this.$data.swiperOption.initialSlide = 1;
            } else if (day == 7) {
                this.$data.swiperOption.initialSlide = 2;
            } else if (day == 8) {
                this.$data.swiperOption.initialSlide = 3;
            } else if (day == 9) {
                this.$data.swiperOption.initialSlide = 4;
            } else if (day == 10) {
                this.$data.swiperOption.initialSlide = 5;
            } else if (day == 11) {
                this.$data.swiperOption.initialSlide = 6;
            } else {
                this.$data.swiperOption.initialSlide = 0;
                console.log("还没过年呢！")
            }
            window.index = this.$data.swiperOption.initialSlide;
        },
        mounted() {
            if ((this.GetQueryString("frs") == "share") || (this.GetQueryString("frs") == "wxshare")) {
                window._hmt.push(["_trackEvent", "春节活动", "enter", "有效分享"]);
            }
            var audio = document.getElementsByClassName("audio_music")[this.$data.swiperOption.initialSlide];
            audio.play()
            if (audio.paused) {
                this.$data.andOrIos = false;
                this.$data.play_ok = false;
            } else {
                this.$data.andOrIos = true;
            }
            window.play_status = true
            wechat.init().then(() => {
                // 分享好友、朋友圈
                wechat.share({
                    title: "千千音乐携群星新春贺岁，快来开福袋！",
                    desc: "叮咚！千千音乐携群星来拜年，还带了新年礼物要送你哦！",
                    imgUrl: "https://static0.qianqian.com/tms/download/static/spring/back_details.jpg",
                    linkUrl: "https://c.taihe.com/ua/spring/index.html?frs=wxshare"
                })
            })
            this.createFz()
            var ua = navigator.userAgent.toLowerCase();
            if (ua.match(/MicroMessenger/i) == "micromessenger") {
                window._hmt.push(["_trackEvent", "春节活动", "source", "微信"]);
            }
            if (ua.match(/WeiBo/i) == "weibo") {
                window._hmt.push(["_trackEvent", "春节活动", "source", "微博"]);
            }
            if (ua.match(/QQ/i) == "qq") {
                window._hmt.push(["_trackEvent", "春节活动", "source", "QQ"]);
            }
        },
        methods: {
            init() {},
            details_close() {
                this.$data.isShow = false;
            },
            details_show() {
                this.$data.isShow = true;
            },
            music_stop() {
                console.log("stop")
                this.$data.play_status = false;
                window.play_status = false;
                console.log(window.play_status)
                var arr = document.getElementsByClassName("audio_music");
                for (var j = 0; j < arr.length; j++) {
                    arr[j].currentTime = 0;
                    arr[j].pause();
                }
            },
            share_show() {
                // 百度统计
                window._hmt.push(["_trackEvent", "春节活动", "click", "分享"]);
                let share_data = {
                    url: "https://c.taihe.com/ua/spring/index.html?frs=share",
                    pic: "https://static0.qianqian.com/tms/download/static/spring/back_details.jpg",
                    title: "千千音乐携群星新春贺岁，快来开福袋！",
                    text: "叮咚！千千音乐携群星来拜年，还带了新年礼物要送你哦！",
                    imageurl: "https://static0.qianqian.com/tms/download/static/spring/back_details.jpg"
                };
                window.$$$.require({
                    weixin: share_data,
                    share: true
                })
                if (this.inNative) {
                    this.$public.callapp({
                        fr: "h5",
                        action: "share",
                        callback: "",
                        args: share_data,
                    }, () => {})
                } else {
                    window.$$$.share(share_data, "h5", function() {
                        window.$$$.trackEvent.nativeCall("分享调起");
                    }, function() {
                        window.$$$.trackEvent.exposure("dialog", "分享弹层展现");
                    })
                }
            },
            bag_open(opt_value) {
                let temp = "开启福袋" + opt_value
                window._hmt.push(["_trackEvent", "春节活动", "click", temp]);
                let queryStr = "";
                if (this.inNative) {
                    queryStr = window.location.search.replace("?", "&")
                    console.log(queryStr);
                }
                var data = new Date();
                var day = data.getDate();
                if (opt_value == "薛之谦") {
                    window.location.href = "https://c.taihe.com/act/ticket?aid=30000056" + queryStr;
                } else if (opt_value == "许嵩") {
                    window.location.href = "https://c.taihe.com/act/ticket?aid=30000057" + queryStr;
                } else if (opt_value == "李志") {
                    window.location.href = "https://c.taihe.com/act/ticket?aid=30000058" + queryStr;
                } else if (opt_value == "徐佳莹") {
                    window.location.href = "https://c.taihe.com/act/ticket?aid=30000059" + queryStr;
                } else if (opt_value == "陈洁仪") {
                    window.location.href = "https://c.taihe.com/act/ticket?aid=30000060" + queryStr;
                } else if (opt_value == "戴荃") {
                    window.location.href = "https://c.taihe.com/act/ticket?aid=30000061" + queryStr;
                } else if (opt_value == "尹毓恪") {
                    window.location.href = "https://c.taihe.com/act/ticket?aid=30000062" + queryStr;
                } else {
                    window.location.href = "https://c.taihe.com/act/ticket?aid=30000056" + queryStr;
                }
            },
            music_play(item) {
                this.$public.callapp({
                    fr: "h5",
                    action: "stopPlay",
                    args: {},
                    callback: ""
                }, () => {})
                this.$data.play_status = true;
                window.play_status = true;
                var audio = document.getElementsByClassName("audio_music");
                audio[window.index].play();
            },
            all_play() {
                this.$public.callapp({
                    fr: "h5",
                    action: "stopPlay",
                    args: {},
                    callback: ""
                }, () => {})
                if (!this.$data.play_ok) {
                    var audio = document.getElementsByClassName("audio_music");
                    for (var i = 0; i < audio.length; i++) {
                        audio[i].play()
                        audio[i].pause()
                    }
                    this.$data.play_status = true;
                    window.play_status = true;
                    audio[window.index].play();
                    setTimeout(() => {
                        this.$data.play_ok = true;
                    }, 249);
                }
            },
            GetQueryString(name) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                var r = window.location.search.substr(1).match(reg); //search,查询？后面的参数，并匹配正则
                if (r != null) return unescape(r[2]);
                return null;
            },
            createFz() {
                let me = this
                clearInterval(me.fzItem)
                function Obj() {} //创建一个对象
                /*为这个对象添加一个具有一个参数的原型方法*/
                Obj.prototype.draw = function(o) {
                    var speed = -50; //福字下落的初始值
                    let interval = Math.random() > 0.7 ? 1 : -1; //随机生成一个向左或者向右的福字
                    var startPosLeft, speedTemp;
                    if (interval > 0) {
                        startPosLeft = Math.ceil(Math.random() * (document.documentElement.clientWidth)) * 1 / 2;
                        speedTemp = 0.2 * (Math.random());
                    } else {
                        startPosLeft = Math.ceil(Math.random() * (document.documentElement.clientWidth)) * 5 / 6;
                        speedTemp = 0.2 * (Math.random() + 1);
                    }
                    o.style.opacity = 0.6; //设置透明度
                    o.style.left = startPosLeft + "px";
                    o.style.top = speed + "px";
                    var intervalItem = setInterval(function() {
                        //雪花下落的top值小鱼屏幕的可视区域高时执行下列
                        if ((speed < document.documentElement.clientHeight) && (startPosLeft < document.documentElement.clientWidth)) {
                            o.style.top = speed + "px";
                            o.style.left = startPosLeft + "px";
                            startPosLeft += interval * speedTemp;
                            speed += 1;
                        } else {
                            o.style.display = "none";
                            clearInterval(intervalItem);
                            me.fzCount--
                        }
                    }, 10);
                }
                var flame = document.getElementById("iflame");
                /*使用setInterval定时器每800毫秒创建一个福字*/
                me.fzItem = setInterval(function() {
                    // console.log(me.fzCount)
                    if (me.fzCount > 10) return
                    var odiv = document.createElement("div"); //创建div
                    var oPic = document.createElement("img");
                    oPic.src = "//static0.qianqian.com/tms/download/static/spring/newFz.png";
                    oPic.setAttribute("class", "fuzi");
                    odiv.appendChild(oPic);
                    odiv.style.position = "absolute"; //div的绝对定位
                    flame.appendChild(odiv); //把创建好的div放进flame中
                    var obj = new Obj(); //创建函数
                    obj.draw(odiv); //执行obj的draw方法
                    me.fzCount++
                }, 800);
            }
        }
    }
</script>
<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>
<style>
    * {
        outline: none;
    }
    html,
    body {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .z100 {
        z-index: 100;
    }
    .z101 {
        z-index: 101;
    }
    .swiper-button-prev {
        position: absolute!important;
        z-index: 0!important;
        margin: 0 auto!important;
        width: 11% !important;
        display: block!important;
        height: 5%!important;
        opacity: 1!important;
        left: 0!important;
        right: 0!important;
        top: 3%!important;
        cursor: none!important;
        background-image: url("//static0.qianqian.com/tms/download/static/spring/new_pre.png")!important;
        background-size: 100%!important;
        background-repeat: no-repeat!important;
        animation: pre 1.3s infinite 0s linear running;
    }
    @keyframes pre {
        0% {
            transform: translateY(0);
            opacity: 0.3;
        }
        50% {
            transform: translateY(-4px);
            opacity: 1;
        }
        100% {
            transform: translateY(0px);
            opacity: 0.3;
        }
    }
    .swiper-button-next {
        position: absolute!important;
        z-index: 0!important;
        margin: 0 auto!important;
        width: 11%!important;
        height: 5%!important;
        opacity: 1!important;
        left: 0!important;
        right: 0!important;
        top: 83%!important;
        cursor: none!important;
        background-image: url("//static0.qianqian.com/tms/download/static/spring/new_next.png")!important;
        background-size: 100%!important;
        background-repeat: no-repeat!important;
        animation: next 1.3s infinite 0s linear running;
    }
    @keyframes next {
        0% {
            transform: translateY(0);
            opacity: 0.3;
        }
        50% {
            transform: translateY(4px);
            opacity: 1;
        }
        100% {
            transform: translateY(0px);
            opacity: 0.3;
        }
    }
    @media screen and (min-device-width: 700px) {
        .swiper-button-next,
        .swiper-button-prev {
            display: none!important;
        }
    }
    @media screen and (min-device-height: 50em) {
        .swiper-button-prev {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/pre2.png")!important;
            top: -8%!important;
        }
    }
    @media screen and ( device-height: 812px) and (device-width: 375px) {
        .swiper-button-prev {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/pre2.png")!important;
            top: -8%!important;
        }
    }
    .wrapper {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .swiper {
        height: 100%;
        width: 100%;
        position: relative;
        z-index: 1002 !important;
    }
    .slide {
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
    .back_bg {
        height: 100%;
        width: 100%;
        background-image: url("//static0.qianqian.com/tms/download/static/spring/back.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: fixed;
        top: 0;
        z-index: 1;
    }
    .back {
        height: 100%;
        width: 100%;
        position: absolute;
    }
    .star_wrapper {
        position: absolute;
        width: 100%;
        height: auto;
    }
    .back_x {
        width: 100%;
        height: 100%;
        display: none;
    }
    .back_none {
        width: 100%;
        height: 100%;
    }
    @media screen and (min-device-height: 50em) {
        .back_x {
            display: block;
        }
        .back_none {
            display: none;
        }
    }
    @media screen and ( device-height: 812px) and (device-width: 375px) {
        .back_x {
            display: block;
        }
        .back_none {
            display: none;
        }
    }
    .star {
        display: block;
        position: absolute;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 100%;
        height: 100%;
        border: none;
    }
    .xzq {
        background-image: url("//static0.qianqian.com/tms/download/static/spring/xzq1.png");
    }
    .xs {
        background-image: url("//static0.qianqian.com/tms/download/static/spring/xs1.png");
    }
    .lz {
        background-image: url("//static0.qianqian.com/tms/download/static/spring/lz4.png");
    }
    .xjy {
        background-image: url("//static0.qianqian.com/tms/download/static/spring/xjy1.png");
    }
    .cjy {
        background-image: url("//static0.qianqian.com/tms/download/static/spring/cjy1.png");
    }
    .dq {
        background-image: url("//static0.qianqian.com/tms/download/static/spring/dq4.png");
    }
    .yyk {
        background-image: url("//static0.qianqian.com/tms/download/static/spring/yyk1.png");
    }
    @media screen and (min-device-height: 50em) {
        .xzq {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/xzq3.png");
        }
        .xs {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/xs3.png");
        }
        .lz {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/lz5.png");
        }
        .xjy {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/xjy3.png");
        }
        .cjy {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/cjy3.png");
        }
        .dq {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/dq5.png");
        }
        .yyk {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/yyk3.png");
        }
    }
    @media screen and ( device-height: 812px) and (device-width: 375px) {
        .xzq {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/xzq3.png");
        }
        .xs {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/xs3.png");
        }
        .lz {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/lz5.png");
        }
        .xjy {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/xjy3.png");
        }
        .cjy {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/cjy3.png");
        }
        .dq {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/dq5.png");
        }
        .yyk {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/yyk3.png");
        }
    }
    .details {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        background-image: url("//static0.qianqian.com/tms/download/static/spring/back_details.png");
        z-index: 1;
    }
    .details_inner {
        position: absolute;
        width: 100%;
        height: auto;
    }
    .details_img {
        position: absolute;
        top: 0;
        width: 100%;
        height: auto;
    }
    @media screen and (min-device-height: 50em) {
        .details {
            top: -10%;
        }
        .details_inner {
            top: 10%;
        }
    }
    @media screen and ( device-height: 812px) and (device-width: 375px) {
        .details {
            top: -10%;
        }
        .details_inner {
            top: 10%;
        }
    }
    .details_close {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 19%;
        margin: auto;
        width: 2.5rem;
        height: 2.5rem;
    }
    @media screen and (min-device-width: 700px) {
        .details_close {
            bottom: 19.3%;
            width: 4rem;
            height: 4rem;
        }
    }
    @media screen and (min-device-width: 1000px) {
        .details_close {
            width: 5rem;
            height: 5rem;
            bottom: 19.5%;
        }
    }
    .operation {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
    }
    .operation_inner {
        position: absolute;
        width: 100%;
        height: auto;
    }
    .details_button {
        position: absolute;
        width: 20%;
        height: 7.5%;
        top: 1.5%;
        left: 2%;
        background-image: url("//static0.qianqian.com/tms/download/static/spring/details_button.png");
        background-size: 100%;
        background-repeat: no-repeat;
    }
    .first {
        position: absolute;
        width: 11%;
        height: 7.0%;
        top: 1.5%;
        right: 16%;
        background-image: url("//static0.qianqian.com/tms/download/static/spring/first.png");
        background-size: 100%;
        background-repeat: no-repeat;
        z-index: 1;
        animation: message 0.8s infinite 0s linear running;
    }
    .first_message {
        position: absolute;
        width: 25.5%;
        height: 7.0%;
        top: 8%;
        right: 1.5%;
        background-image: url("//static0.qianqian.com/tms/download/static/spring/first_message.png");
        background-size: 100%;
        background-repeat: no-repeat;
    }
    @keyframes message {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2); 
        }
        100% {
            transform: scale(1);
        }
    }
    .music_button {
        position: absolute;
        width: 11%;
        height: 7.0%;
        top: 1.5%;
        right: 16%;
        background-image: url("//static0.qianqian.com/tms/download/static/spring/new_music_button.png");
        background-size: 100%;
        background-repeat: no-repeat;
        animation: turn 4.5s infinite 0s linear running;
        transform-origin: 50% 48%;
    }
    @keyframes turn {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .stop_button {
        position: absolute;
        width: 11%;
        height: 7.0%;
        top: 1.5%;
        right: 16%;
        background-image: url("//static0.qianqian.com/tms/download/static/spring/first.png");
        background-size: 100%;
        background-repeat: no-repeat;
    }
    .and_music_button {
        position: absolute;
        width: 11%;
        height: 7.0%;
        top: 1.5%;
        right: 16%;
        background-image: url("//static0.qianqian.com/tms/download/static/spring/aMusic.png");
        background-size: 100%;
        background-repeat: no-repeat;
        animation: aturn 4.5s infinite 0s linear running;
        transform-origin: 50% 48%;
    }
    @keyframes aturn {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .and_stop_button {
        position: absolute;
        width: 11%;
        height: 7.0%;
        top: 1.5%;
        right: 16%;
        background-image: url("//static0.qianqian.com/tms/download/static/spring/aStop.png");
        background-size: 100%;
        background-repeat: no-repeat;
    }
    .share_button {
        position: absolute;
        width: 11%;
        height: 7.0%;
        top: 1.5%;
        right: 1.5%;
        background-image: url("//static0.qianqian.com/tms/download/static/spring/share_button.png");
        background-size: 100%;
        background-repeat: no-repeat;
    }
    .bag_button {
        position: absolute;
        width: 57%;
        height: 9%;
        bottom: 29%;
        right: 21%;
        background-image: url("//static0.qianqian.com/tms/download/static/spring/new_luckBag.png");
        background-size: 100%;
        background-repeat: no-repeat;
        animation: bag 0.8s infinite 0s linear running;
    }
    @keyframes bag {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.08);
        }
        100% {
            transform: scale(1);
        }
    }
    @media screen and (min-device-height: 50em) {
        .details_button,
        .first,
        .stop_button,
        .and_stop_button,
        .share_button {
            top: -8.5%;
        }
        .bag_button {
            bottom: 32%;
        }
        .first_message {
            top: -3%;
        }
        .music_button {
            top: -8.5%;
            transform-origin: 50% 44%;
        }
        .and_music_button {
            top: -8.5%;
            transform-origin: 50% 44%;
        }
    }
    @media screen and ( device-height: 812px) and (device-width: 375px) {
        .details_button,
        .first,
        .stop_button,
        .and_stop_button,
        .share_button {
            top: -8.5%;
        }
        .bag_button {
            bottom: 32%;
        }
        .first_message {
            top: -3%;
        }
        .music_button {
            top: -8.5%;
            transform-origin: 50% 44%;
        }
        .and_music_button {
            top: -8.5%;
            transform-origin: 50% 44%;
        }
    }
    .logo_img {
        position: absolute;
        bottom: 10%;
        left: 4%;
        width: 18%;
        height: 6%;
        background-image: url("//static0.qianqian.com/tms/download/static/spring/logo.png");
        background-size: 100%;
        background-repeat: no-repeat;
    }
    @media screen and (min-device-width: 700px) {
        .logo_img {
            display: none;
        }
    }
    .fuzi {
        width: 50px;
        height: 50px;
    }
    .flame div {
        z-index: 1000;
    }
    @media screen and (min-device-height: 50em) {
        .back {
            position: absolute;
            top: 10%;
        }
    }
    @media screen and ( device-height: 812px) and (device-width: 375px) {
        .back {
            position: absolute;
            top: 10%;
        }
    }
    @media screen and ( device-height: 1024px) and (device-width: 768px) {
        .bag_button {
            bottom: 35%;
        }
        .details_button,
        .first,
        .stop_button,
        .share_button {
            top: -2%;
        }
        .first_message {
            top: -2%;
        }
        .music_button {
            top: -2%;
            transform-origin: 50% 44%;
        }
        .back {
            position: absolute;
            top: 4%;
        }
        .first_message {
            display: none;
        }
    }
    /* 华为P20 华为P20pro 华为mate20 华为mate20X 小米8SE */
    @media screen and ( device-height: 748px) and (device-width: 360px) {
        .details_button,
        .first,
        .stop_button,
        .and_stop_button,
        .share_button {
            top: -8.5%;
        }
        .bag_button {
            bottom: 32%;
        }
        .first_message {
            top: -3%;
        }
        .music_button {
            top: -8.5%;
            transform-origin: 50% 44%;
        }
        .and_music_button {
            top: -8.5%;
            transform-origin: 50% 44%;
        }
        .back {
            position: absolute;
            top: 10%;
        }
        .swiper-button-prev {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/pre2.png")!important;
            top: -8%!important;
        }
        .back_x {
            display: block;
        }
        .back_none {
            display: none;
        }
        .xzq {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/xzq3.png");
        }
        .xs {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/xs3.png");
        }
        .lz {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/lz5.png");
        }
        .xjy {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/xjy3.png");
        }
        .cjy {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/cjy3.png");
        }
        .dq {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/dq5.png");
        }
        .yyk {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/yyk3.png");
        }
        .details {
            top: -10%;
        }
        .details_inner {
            top: 10%;
        }
    }
    /* 荣耀9i vivoX21 vivoX21i vivoZ3 小米8青春版 小米play 红米6pro oppoR15 */
    @media screen and ( device-height: 760px) and (device-width: 360px) {
        .details_button,
        .first,
        .stop_button,
        .and_stop_button,
        .share_button {
            top: -8.5%;
        }
        .bag_button {
            bottom: 32%;
        }
        .first_message {
            top: -3%;
        }
        .music_button {
            top: -8.5%;
            transform-origin: 50% 44%;
        }
        .and_music_button {
            top: -8.5%;
            transform-origin: 50% 44%;
        }
        .back {
            position: absolute;
            top: 10%;
        }
        .swiper-button-prev {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/pre2.png")!important;
            top: -8%!important;
        }
        .back_x {
            display: block;
        }
        .back_none {
            display: none;
        }
        .xzq {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/xzq3.png");
        }
        .xs {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/xs3.png");
        }
        .lz {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/lz5.png");
        }
        .xjy {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/xjy3.png");
        }
        .cjy {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/cjy3.png");
        }
        .dq {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/dq5.png");
        }
        .yyk {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/yyk3.png");
        }
        .details {
            top: -10%;
        }
        .details_inner {
            top: 10%;
        }
    }
    /* 华为mate20pro oppoR17 oppoR17pro oppoFindx oppoR15x oppoK1 vivoX23系列 vivoNEX双屏版（主屏）红米note7 华为nova3 荣耀8x vivoX21s 小米MIX3 */
    @media screen and ( device-height: 780px) and (device-width: 360px) {
        .details_button,
        .first,
        .stop_button,
        .and_stop_button,
        .share_button {
            top: -8.5%;
        }
        .bag_button {
            bottom: 32%;
        }
        .first_message {
            top: -3%;
        }
        .music_button {
            top: -8.5%;
            transform-origin: 50% 44%;
        }
        .and_music_button {
            top: -8.5%;
            transform-origin: 50% 44%;
        }
        .back {
            position: absolute;
            top: 10%;
        }
        .swiper-button-prev {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/pre2.png")!important;
            top: -8%!important;
        }
        .back_x {
            display: block;
        }
        .back_none {
            display: none;
        }
        .xzq {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/xzq3.png");
        }
        .xs {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/xs3.png");
        }
        .lz {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/lz5.png");
        }
        .xjy {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/xjy3.png");
        }
        .cjy {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/cjy3.png");
        }
        .dq {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/dq5.png");
        }
        .yyk {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/yyk3.png");
        }
        .details {
            top: -10%;
        }
        .details_inner {
            top: 10%;
        }
    }
    /* 荣耀V20 华为nova4 */
    @media screen and ( device-height: 770px) and (device-width: 360px) {
        .details_button,
        .first,
        .stop_button,
        .and_stop_button,
        .share_button {
            top: -8.5%;
        }
        .bag_button {
            bottom: 32%;
        }
        .first_message {
            top: -3%;
        }
        .music_button {
            top: -8.5%;
            transform-origin: 50% 44%;
        }
        .and_music_button {
            top: -8.5%;
            transform-origin: 50% 44%;
        }
        .back {
            position: absolute;
            top: 10%;
        }
        .swiper-button-prev {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/pre2.png")!important;
            top: -8%!important;
        }
        .back_x {
            display: block;
        }
        .back_none {
            display: none;
        }
        .xzq {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/xzq3.png");
        }
        .xs {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/xs3.png");
        }
        .lz {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/lz5.png");
        }
        .xjy {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/xjy3.png");
        }
        .cjy {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/cjy3.png");
        }
        .dq {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/dq5.png");
        }
        .yyk {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/yyk3.png");
        }
        .details {
            top: -10%;
        }
        .details_inner {
            top: 10%;
        }
    }
    /* 华为mate10pro 小米mix2s */
    @media screen and ( device-height: 720px) and (device-width: 360px) {
        .details_button,
        .first,
        .stop_button,
        .and_stop_button,
        .share_button {
            top: -8.5%;
        }
        .bag_button {
            bottom: 32%;
        }
        .first_message {
            top: -3%;
        }
        .music_button {
            top: -8.5%;
            transform-origin: 50% 44%;
        }
        .and_music_button {
            top: -8.5%;
            transform-origin: 50% 44%;
        }
        .back {
            position: absolute;
            top: 10%;
        }
        .swiper-button-prev {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/pre2.png")!important;
            top: -8%!important;
        }
        .back_x {
            display: block;
        }
        .back_none {
            display: none;
        }
        .xzq {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/xzq3.png");
        }
        .xs {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/xs3.png");
        }
        .lz {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/lz5.png");
        }
        .xjy {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/xjy3.png");
        }
        .cjy {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/cjy3.png");
        }
        .dq {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/dq5.png");
        }
        .yyk {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/yyk3.png");
        }
        .details {
            top: -10%;
        }
        .details_inner {
            top: 10%;
        }
    }
    /* vivoNEX系列（除双屏版） */
    @media screen and ( device-height: 772px) and (device-width: 360px) {
        .details_button,
        .first,
        .stop_button,
        .and_stop_button,
        .share_button {
            top: -8.5%;
        }
        .bag_button {
            bottom: 32%;
        }
        .first_message {
            top: -3%;
        }
        .music_button {
            top: -8.5%;
            transform-origin: 50% 44%;
        }
        .and_music_button {
            top: -8.5%;
            transform-origin: 50% 44%;
        }
        .back {
            position: absolute;
            top: 10%;
        }
        .swiper-button-prev {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/pre2.png")!important;
            top: -8%!important;
        }
        .back_x {
            display: block;
        }
        .back_none {
            display: none;
        }
        .xzq {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/xzq3.png");
        }
        .xs {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/xs3.png");
        }
        .lz {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/lz5.png");
        }
        .xjy {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/xjy3.png");
        }
        .cjy {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/cjy3.png");
        }
        .dq {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/dq5.png");
        }
        .yyk {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/yyk3.png");
        }
        .details {
            top: -10%;
        }
        .details_inner {
            top: 10%;
        }
    }
    /* 三星S9 三星note9 三星s8 三星note8 */
    @media screen and ( device-height: 740px) and (device-width: 360px) {
        .details_button,
        .first,
        .stop_button,
        .and_stop_button,
        .share_button {
            top: -8.5%;
        }
        .bag_button {
            bottom: 32%;
        }
        .first_message {
            top: -3%;
        }
        .music_button {
            top: -8.5%;
            transform-origin: 50% 44%;
        }
        .and_music_button {
            top: -8.5%;
            transform-origin: 50% 44%;
        }
        .back {
            position: absolute;
            top: 10%;
        }
        .swiper-button-prev {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/pre2.png")!important;
            top: -8%!important;
        }
        .back_x {
            display: block;
        }
        .back_none {
            display: none;
        }
        .xzq {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/xzq3.png");
        }
        .xs {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/xs3.png");
        }
        .lz {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/lz5.png");
        }
        .xjy {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/xjy3.png");
        }
        .cjy {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/cjy3.png");
        }
        .dq {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/dq5.png");
        }
        .yyk {
            background-image: url("//static0.qianqian.com/tms/download/static/spring/yyk3.png");
        }
        .details {
            top: -10%;
        }
        .details_inner {
            top: 10%;
        }
    }
</style>
