workflow "Test & Deploy" {
  on = "push"
  resolves = [
    #     "deploy:production",
    "deploy:staging",
  ]
}

# action "Master" {
#   uses = "actions/bin/filter@master"
#   args = "branch master"
# }

action "Develop" {
  uses = "actions/bin/filter@master"
  args = "branch develop"
}

action "Build: Staging" {
  needs = "Develop"
  uses = "actions/npm@master"
  args = "install"
  runs = "yarn"

  # action "Master" {
  #   uses = "actions/bin/filter@master"
  #   args = "branch master"
  # }
}

action "Test: Staging" {
  needs = "Build: Staging"
  uses = "actions/npm@master"
  args = "test"
  runs = "yarn"

  # action "Master" {
  #   uses = "actions/bin/filter@master"
  #   args = "branch master"
  # }
}

# action "Test: Production" {
#   needs = "Master"
#   uses = "actions/npm@master"
#   args = "test"
# }

action "deploy:staging" {
  uses = "actions/zeit-now@master"
  needs = "Test: Staging"
  secrets = [
    "ZEIT_TOKEN",
  ]
  args = "--target staging"
}

# action "deploy:production" {
#   uses = "actions/zeit-now@master"
#   needs = "Test: Production"
#   secrets = [
#     "ZEIT_TOKEN",
#   ]
#   args = "--local-config ./app/now.json --target production"
# }
