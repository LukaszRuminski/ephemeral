module.exports = async function (context, req) {
    
    if (req.headers.referer) {
        
        const referer = req.headers.referer
        const prNumber = referer.match(/[0-9]+/)
        context.log('referer', referer)
        context.log('prNumber', prNumber)
        
        const reqHost = req.headers['x-original-host']
        context.log('reqHost', reqHost)
        const reqUrl = req.headers['x-original-url']
        context.log('reqUrl', reqUrl)
        const reqPath = '/' + prNumber + reqUrl
        context.log('reqPath', reqPath)
        const filePath = 'http://' + reqHost + reqPath
        
        context.log('filePath', filePath)
        context.res = {
            status: 301,
            headers: {
                "Location": filePath
            }
        }
    }
}
