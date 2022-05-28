package jj

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class test3 extends Simulation{

  val scn = scenario("test3")
    .exec(
      http("test3")
        .get("http://a5bb9ec672fb8497d98689cb397a1913-85705189.us-east-1.elb.amazonaws.com:3000/v1/user")
        .check(status.is(session =>200))
    )
    .pause(5)
}
