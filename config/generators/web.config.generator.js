const fs = require('fs')

const generateWebConfig = () => {
    const webConfig = `<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <system.web>
    <httpCookies httpOnlyCookies="true" requireSSL="true" lockItem="true" />
  </system.web>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="HTTP to HTTPS redirect" stopProcessing="true">
          <match url="(.*)" />
          <conditions>
            <add input="{HTTPS}" pattern="off" ignoreCase="true" />
          </conditions>
          <action type="Redirect" url="https://{HTTP_HOST}/{R:1}" redirectType="Permanent" />
        </rule>
        <rule name="StaticContent">
          <action type="Rewrite" url="{REQUEST_URI}"/>
        </rule>
      </rules>
      <outboundRules>
        <rule name="Add Strict-Transport-Security when HTTPS" enabled="true">
          <match serverVariable="RESPONSE_Strict_Transport_Security" pattern=".*" />
          <conditions>
            <add input="{HTTPS}" pattern="on" ignoreCase="true" />
          </conditions>
          <action type="Rewrite" value="max-age=31536000" />
        </rule>
      </outboundRules>
    </rewrite>

    <httpErrors errorMode="Custom">
      <clear />
      <error statusCode="404" path="/404" responseMode="Redirect" />
    </httpErrors>
  </system.webServer>
</configuration>`

    fs.writeFileSync(`out/web.config`, webConfig)
}

module.exports = generateWebConfig
