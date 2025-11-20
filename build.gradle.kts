import com.github.gradle.node.npm.task.NpmSetupTask
import com.github.gradle.node.npm.task.NpmTask
import com.github.gradle.node.npm.task.NpxTask
import com.github.gradle.node.task.NodeSetupTask
import com.github.gradle.node.task.NodeTask

plugins {
  id("com.github.node-gradle.node") version "7.1.0"
}

node {
  download = true

  version = "20.19.4"

  distBaseUrl = "https://nodejs.org/dist"

  // The directory where Node.js is unpacked (when download is true)
  workDir = file("${project.projectDir}/.gradle/nodejs")

  // The directory where npm is installed (when a specific version is defined)
  npmWorkDir = file("${project.projectDir}/.gradle/npm")

  // The directory where yarn is installed (when a Yarn task is used)
  yarnWorkDir = file("${project.projectDir}/.gradle/yarn")


  nodeProjectDir = file("${project.projectDir}")
}

tasks.register<NpmTask>("install") {
  group = "build"
  description = "Install Dependencies"
  args = listOf("install")
}

tasks.register<NpmTask>("clean") {
  group = "build"
  args = listOf("run", "clean")
}


tasks.register<NpxTask>("build") {
  group = "build"
  dependsOn("install")
  command = "vue-cli-service"
  args = listOf("build")
}.get()


tasks.register<NpxTask>("vueRun") {
  dependsOn("build")
  group = "application"
  command = "vue-cli-service"
  args = listOf("serve")
}
