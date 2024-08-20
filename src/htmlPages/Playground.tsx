const Playground = `
<div>
<script>!function(){window.semaphore=window.semaphore||[],window.ketch=function(){window.semaphore.push(arguments)};var e=new URLSearchParams(document.location.search),o=e.has("property")?e.get("property"):"localhost",n=document.createElement("script");n.type="text/javascript",n.src="https://global.ketchcdn.com/web/v2/config/anupam_org/".concat(o,"/boot.js"),n.defer=n.async=!0,document.getElementsByTagName("head")[0].appendChild(n)}();</script>

  <!-- Google Tag Manager LOCALHOST -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-WQWPDSHJ');</script>
  <!-- End Google Tag Manager -->

  <!-- Google Tag Manager ANUPAM_CUSTOMER -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-PMXMJXD7');</script>
  <!-- End Google Tag Manager -->

<!-- Google Tag Manager LOCALHOST (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WQWPDSHJ"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<!-- Google Tag Manager ANUPAM-CUSTOMER (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PMXMJXD7"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<div class="nav">
  <button style="display:none;" onclick="window.semaphore.push(['showPreferences', {tab: 'overviewTab'}])">Overview</button>
  <button style="display:none;" onclick="window.semaphore.push(['showPreferences', {tab: 'consentsTab'}])">Preferences</button>
  <button style="display:none;" onclick="window.semaphore.push(['showPreferences', {tab: 'rightsTab'}])">Rights</button>
  <button style="display:none;" onclick="window.semaphore.push(['showPreferences',{showRightsTab:false}])">Hide Rights Tab</button>
  <button style="display:none;" onclick="window.semaphore.push(['showPreferences',{showConsentsTab:false}])"> Hide Preferences Tab</button>
  <button  onclick="location.href='standalone-privacyPreferences.html'" type="button">All Subjects Stand-Alone Pref Centre</button>
  <button style="display:none;" onclick="location.href='employee-homepage.html'" type="button">Go To Employee Home Page</button>
  <button style="display:none;" onclick="location.href='customerDemo.html'" type="button">Customer Demo</button>
  <button style="display:none;" onclick="location.href='iframe.html'" type="button">Stand Alone Dummy</button>
  <a style="display:none;" href="javascript:semaphore.push(['showPreferences']);">Privacy Settings</a>
  <a href="#" onclick="semaphore.push(['showPreferences', {showOverviewTab: false}])">No-overview Pref Centre</a>
  <button onclick="location.href='customerDemo.html'" type="button">Customer Demo </button>
  <button onclick="location.href='subscriber-standalone-privacyPreferences.html'" type="button">Subscriber Preferences</button>
  <button onclick="location.href='loyalty-standalone-privacyPreferences.html'" type="button">Loyalty Preferences</button>
  <button onclick="location.href='customer-standalone-privacyPreferences.html?auth-token=anupam@ketch.com'" type="button">Stand-Alone Cust Pref Centre </button>
  <button onclick="location.href='cs-agent-standalone-consentEntry.html'" type="button">CS Agent Consent Entry</button>
  <button onclick="location.href='localhost-standalone-privacyPreferences.html'" type="button">Local Host StandAlone Preference Page</button>
  <button onclick="location.href='localhost2.html?ketch_log=trace'" type="button">Local Host 2 </button>
  <button onclick="location.href='localhost3.html?ketch_log=trace'" type="button">local Host 3 </button>
</div>
<div class="bg"></div>

</div>
`;

export default Playground;
