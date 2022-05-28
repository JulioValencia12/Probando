package jj

//import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._


class test1 extends Simulation {

  val httpProtocol = http
    .baseUrl("http://computer-database.gatling.io")
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
    .doNotTrackHeader("1")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .acceptEncodingHeader("gzip, deflate")
    .userAgentHeader("Mozilla/5.0 (Windows NT 5.1; rv:31.0) Gecko/20100101 Firefox/31.0")

  val scn = scenario("test1")
    .exec(
      http("request_1")
        .get("http://computer-database.gatling.io")
        .check(status.is(session =>
          200 + java.util.concurrent.ThreadLocalRandom.current.nextInt(2)
        ))
        //.check(
        //  status.is(200),
        //  status.not(404),
        //  status.not(500)
        //)
    )
    .pause(5)

  setUp(
    scn.inject(atOnceUsers(1))
  ).protocols(httpProtocol)
    .assertions(global.responseTime.max.lt(100))

}

//def randomUuid = UUID.randomUUID().toString
//val feeder = Iterator.continually(Map("user" -> randomUuid))

//def createPostRequest = {
//http("createuser")
//.post("http://jsonplaceholder.typicode.com/posts")
//.body(StringBody("${user}"))
//.check(status.is(200))
//}

//val scn = scenario("some load test")
//.feed(feeder)
//.exec(createPostRequest)

//setUp(scn.inject(atOnceUsers(100)))
//.maxDuration(20 minutes)