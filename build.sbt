ThisBuild / version := "0.1.0-SNAPSHOT"

ThisBuild / scalaVersion := "2.13.8"

lazy val root = (project in file("."))
  .settings(
    name := "gat-test"
  )

libraryDependencies ++= Seq(
  "io.gatling" % "gatling-core" % "3.7.6",
  "io.gatling" % "gatling-http" % "3.7.6"
)

enablePlugins(GatlingPlugin)
libraryDependencies += "io.gatling.highcharts" % "gatling-charts-highcharts" % "3.7.6" % "test"
libraryDependencies += "io.gatling"            % "gatling-test-framework"    % "3.7.6" % "test"