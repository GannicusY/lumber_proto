// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: proto/Enum/ErrorCode.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021, 8981
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Lumber.Enum {

  /// <summary>Holder for reflection information generated from proto/Enum/ErrorCode.proto</summary>
  public static partial class ErrorCodeReflection {

    #region Descriptor
    /// <summary>File descriptor for proto/Enum/ErrorCode.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static ErrorCodeReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Chpwcm90by9FbnVtL0Vycm9yQ29kZS5wcm90bxILbHVtYmVyLkVudW0qrwEK",
            "CkVFcnJvckNvZGUSCwoHVW5Lbm93bhAAEhcKE0ludGVybmFsU2VydmVyRXJy",
            "b3IQARIUChBEaWFtb25kTm90RW5vdWdoEGQSEQoNVXNlck5vdE9ubGluZRBs",
            "EhQKD1RyZWVXYXRlcmluZ01heBCUARISCg1Db2luTm90RW5vdWdoEJYBEhUK",
            "EE5lZWRNb3JlV2F0ZXJpbmcQlwESEQoMVHJlZUxldmVsTWF4EJgBYgZwcm90",
            "bzM="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { },
          new pbr::GeneratedClrTypeInfo(new[] {typeof(global::Lumber.Enum.EErrorCode), }, null, null));
    }
    #endregion

  }
  #region Enums
  /// <summary>
  /// 返回错误码
  /// </summary>
  public enum EErrorCode {
    /// <summary>
    ///未知错误
    /// </summary>
    [pbr::OriginalName("UnKnown")] UnKnown = 0,
    /// <summary>
    ///服务器内部错误
    /// </summary>
    [pbr::OriginalName("InternalServerError")] InternalServerError = 1,
    /// <summary>
    ///玫瑰不足
    /// </summary>
    [pbr::OriginalName("DiamondNotEnough")] DiamondNotEnough = 100,
    /// <summary>
    /// 玩家不在线
    /// </summary>
    [pbr::OriginalName("UserNotOnline")] UserNotOnline = 108,
    /// <summary>
    ///仙树灌溉已满,不能再灌溉,可直接升级
    /// </summary>
    [pbr::OriginalName("TreeWateringMax")] TreeWateringMax = 148,
    /// <summary>
    ///金币不足
    /// </summary>
    [pbr::OriginalName("CoinNotEnough")] CoinNotEnough = 150,
    /// <summary>
    ///未浇灌到可升级状态
    /// </summary>
    [pbr::OriginalName("NeedMoreWatering")] NeedMoreWatering = 151,
    /// <summary>
    /// 仙树已经满级
    /// </summary>
    [pbr::OriginalName("TreeLevelMax")] TreeLevelMax = 152,
  }

  #endregion

}

#endregion Designer generated code
