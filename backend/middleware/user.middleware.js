import { rolePermissions } from "../utils/role.permissons.js";

rolePermissions;
export const authorize = (requiredAction) => {
  return (req, res, next) => {
    const userRole = req.user.role;
     console.log("User role:", userRole);
    const allowedActions = rolePermissions[userRole] || [];
    console.log("Allowed actions for role:", allowedActions);

    if (!allowedActions.includes(requiredAction)) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
};
