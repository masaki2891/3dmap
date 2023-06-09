import WebGLConstants from "./WebGLConstants.js";

/**
 * The type of a geometric primitive, i.e., points, lines, and triangles.
 *
 * @enum {number}
 */
const PrimitiveType = {
  /**
   * Points primitive where each vertex (or index) is a separate point.
   *
   * @type {number}
   * @constant
   */
  POINTS: WebGLConstants.POINTS,

  /**
   * Lines primitive where each two vertices (or indices) is a line segment.  Line segments are not necessarily connected.
   *
   * @type {number}
   * @constant
   */
  LINES: WebGLConstants.LINES,

  /**
   * Line loop primitive where each vertex (or index) after the first connects a line to
   * the previous vertex, and the last vertex implicitly connects to the first.
   *
   * @type {number}
   * @constant
   */
  LINE_LOOP: WebGLConstants.LINE_LOOP,

  /**
   * Line strip primitive where each vertex (or index) after the first connects a line to the previous vertex.
   *
   * @type {number}
   * @constant
   */
  LINE_STRIP: WebGLConstants.LINE_STRIP,

  /**
   * Triangles primitive where each three vertices (or indices) is a triangle.  Triangles do not necessarily share edges.
   *
   * @type {number}
   * @constant
   */
  TRIANGLES: WebGLConstants.TRIANGLES,

  /**
   * Triangle strip primitive where each vertex (or index) after the first two connect to
   * the previous two vertices forming a triangle.  For example, this can be used to model a wall.
   *
   * @type {number}
   * @constant
   */
  TRIANGLE_STRIP: WebGLConstants.TRIANGLE_STRIP,

  /**
   * Triangle fan primitive where each vertex (or index) after the first two connect to
   * the previous vertex and the first vertex forming a triangle.  For example, this can be used
   * to model a cone or circle.
   *
   * @type {number}
   * @constant
   */
  TRIANGLE_FAN: WebGLConstants.TRIANGLE_FAN,
};

/**
 * @private
 */
PrimitiveType.isLines = function (primitiveType) {
  return (
    primitiveType === PrimitiveType.LINES ||
    primitiveType === PrimitiveType.LINE_LOOP ||
    primitiveType === PrimitiveType.LINE_STRIP
  );
};

/**
 * @private
 */
PrimitiveType.isTriangles = function (primitiveType) {
  return (
    primitiveType === PrimitiveType.TRIANGLES ||
    primitiveType === PrimitiveType.TRIANGLE_STRIP ||
    primitiveType === PrimitiveType.TRIANGLE_FAN
  );
};

/**
 * @private
 */
PrimitiveType.validate = function (primitiveType) {
  return (
    primitiveType === PrimitiveType.POINTS ||
    primitiveType === PrimitiveType.LINES ||
    primitiveType === PrimitiveType.LINE_LOOP ||
    primitiveType === PrimitiveType.LINE_STRIP ||
    primitiveType === PrimitiveType.TRIANGLES ||
    primitiveType === PrimitiveType.TRIANGLE_STRIP ||
    primitiveType === PrimitiveType.TRIANGLE_FAN
  );
};

export default Object.freeze(PrimitiveType);
