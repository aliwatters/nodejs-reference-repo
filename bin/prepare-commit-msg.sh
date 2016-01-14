#!/bin/bash
echo "ARG[1] $1"

COMMIT_MSG="$1"
BRANCH_NAME=$(git symbolic-ref --short HEAD)
BRANCH_NAME="${BRANCH_NAME##*/}"

echo "BRANCH NAME: $BRANCH_NAME"

JIRA_RE='([A-Z]+\-[0-9]+)'
JIRA=false
if [[ $BRANCH_NAME =~ $JIRA_RE ]]
then
  JIRA=${BASH_REMATCH[1]}
  echo "FOUND JIRA [$JIRA] TICKET"
else
  echo "WARNING: NOT FOUND JIRA TICKET IN BRANCH NAME"
fi;

# limitation here - example PLAT-12 in the branch and PLAT-123 in the msg...
# will pass - TODO: fix -- maybe match ALL jira tickets in the msg and make sure
# one is equal to the branch ticket
if [[ $JIRA && $COMMIT_MSG =~ $JIRA ]]
then
  echo "JIRA ticket in msg"
else
  # if we're on a jira branch prepend the JIRA if not warn.
  if [[ $JIRA ]]
  then
    sed -i.bak -e "1s/^/[$JIRA] /" $1
#    sed -i '.bak' "1s/^/[$JIRA] /"  >> $1 #Insert branch name at the start of the commit message file
  else
    echo "WARNING: JIRA ticket NOT in msg or BRANCH"
  fi;
fi;

if [[ $JIRA == false ]]
then
  echo "NO JIRA BRANCH"
fi;


# BRANCH_IN_COMMIT=$(grep -c "\[$BRANCH_NAME\]" "$1")
#
# FIRSTLINE=$(head -n1 $1)
#
# echo $FIRSTLINE
# if [ -z "$FIRSTLINE"  ] ;then #Check that this is not an amend by checking that the first line is empty
#     sed -i "1s/^/$BRANCH_NAME: \n/" $1 #Insert branch name at the start of the commit message file
# fi
# if [ -n "$BRANCH_NAME" ] && ! [[ $BRANCH_IN_COMMIT -ge 1 ]]; then
#   sed -i.bak -e "1s/^/[$BRANCH_NAME] /" $1
# fi
