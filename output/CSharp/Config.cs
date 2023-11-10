// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: proto/Spec/Config.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021, 8981
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Lumber.Spec {

  /// <summary>Holder for reflection information generated from proto/Spec/Config.proto</summary>
  public static partial class ConfigReflection {

    #region Descriptor
    /// <summary>File descriptor for proto/Spec/Config.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static ConfigReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Chdwcm90by9TcGVjL0NvbmZpZy5wcm90bxILbHVtYmVyLlNwZWMiZwoGQ29u",
            "ZmlnEgoKAklkGAEgASgFEg4KBkZvcm1hdBgCIAEoCRIkCgNLZXkYAyABKA4y",
            "Fy5sdW1iZXIuU3BlYy5lQ29uZmlnS2V5Eg0KBVZhbHVlGAQgASgJEgwKBERl",
            "c2MYBSABKAkqjwIKCmVDb25maWdLZXkSCwoHRGVmYXVsdBAAEg8KC0JhY2Vw",
            "b29sX09uEAESEAoMQmFjZXBvb2xfT2ZmEAISFAoQTWlkZGxlcG9vcl9MaW1p",
            "dBADEhQKEFNlbmlvcnBvb3JfTGltaXQQBBIOCgpQcm9wb3J0aW9uEAUSDQoJ",
            "QnJva2VyYWdlEAYSEAoMSW5pdGlhbF9Hb2xkEAcSEQoNQ29pbl9Jcm9uX0F4",
            "ZRAIEhMKD0NvaW5fU2lsdmVyX0F4ZRAJEhEKDUNvaW5fR29sZF9BeGUQChIR",
            "Cg1Db3N0X0lyb25fQXhlEAsSEwoPQ29zdF9TaWx2ZXJfQXhlEAwSEQoNQ29z",
            "dF9Hb2xkX0F4ZRANYgZwcm90bzM="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { },
          new pbr::GeneratedClrTypeInfo(new[] {typeof(global::Lumber.Spec.eConfigKey), }, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Lumber.Spec.Config), global::Lumber.Spec.Config.Parser, new[]{ "Id", "Format", "Key", "Value", "Desc" }, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Enums
  /// <summary>
  /// 字段名称
  /// </summary>
  public enum eConfigKey {
    /// <summary>
    /// 默认值
    /// </summary>
    [pbr::OriginalName("Default")] Default = 0,
    [pbr::OriginalName("Bacepool_On")] BacepoolOn = 1,
    [pbr::OriginalName("Bacepool_Off")] BacepoolOff = 2,
    [pbr::OriginalName("Middlepoor_Limit")] MiddlepoorLimit = 3,
    [pbr::OriginalName("Seniorpoor_Limit")] SeniorpoorLimit = 4,
    [pbr::OriginalName("Proportion")] Proportion = 5,
    [pbr::OriginalName("Brokerage")] Brokerage = 6,
    [pbr::OriginalName("Initial_Gold")] InitialGold = 7,
    [pbr::OriginalName("Coin_Iron_Axe")] CoinIronAxe = 8,
    [pbr::OriginalName("Coin_Silver_Axe")] CoinSilverAxe = 9,
    [pbr::OriginalName("Coin_Gold_Axe")] CoinGoldAxe = 10,
    [pbr::OriginalName("Cost_Iron_Axe")] CostIronAxe = 11,
    [pbr::OriginalName("Cost_Silver_Axe")] CostSilverAxe = 12,
    [pbr::OriginalName("Cost_Gold_Axe")] CostGoldAxe = 13,
  }

  #endregion

  #region Messages
  [global::System.Diagnostics.DebuggerDisplayAttribute("{ToString(),nq}")]
  public sealed partial class Config : pb::IMessage<Config>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<Config> _parser = new pb::MessageParser<Config>(() => new Config());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<Config> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Lumber.Spec.ConfigReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Config() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Config(Config other) : this() {
      id_ = other.id_;
      format_ = other.format_;
      key_ = other.key_;
      value_ = other.value_;
      desc_ = other.desc_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Config Clone() {
      return new Config(this);
    }

    /// <summary>Field number for the "Id" field.</summary>
    public const int IdFieldNumber = 1;
    private int id_;
    /// <summary>
    /// 字段ID
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int Id {
      get { return id_; }
      set {
        id_ = value;
      }
    }

    /// <summary>Field number for the "Format" field.</summary>
    public const int FormatFieldNumber = 2;
    private string format_ = "";
    /// <summary>
    /// 字段类型
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public string Format {
      get { return format_; }
      set {
        format_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "Key" field.</summary>
    public const int KeyFieldNumber = 3;
    private global::Lumber.Spec.eConfigKey key_ = global::Lumber.Spec.eConfigKey.Default;
    /// <summary>
    /// 字段名称
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public global::Lumber.Spec.eConfigKey Key {
      get { return key_; }
      set {
        key_ = value;
      }
    }

    /// <summary>Field number for the "Value" field.</summary>
    public const int ValueFieldNumber = 4;
    private string value_ = "";
    /// <summary>
    /// 字段值
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public string Value {
      get { return value_; }
      set {
        value_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "Desc" field.</summary>
    public const int DescFieldNumber = 5;
    private string desc_ = "";
    /// <summary>
    /// 描述
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public string Desc {
      get { return desc_; }
      set {
        desc_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as Config);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(Config other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Id != other.Id) return false;
      if (Format != other.Format) return false;
      if (Key != other.Key) return false;
      if (Value != other.Value) return false;
      if (Desc != other.Desc) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      if (Id != 0) hash ^= Id.GetHashCode();
      if (Format.Length != 0) hash ^= Format.GetHashCode();
      if (Key != global::Lumber.Spec.eConfigKey.Default) hash ^= Key.GetHashCode();
      if (Value.Length != 0) hash ^= Value.GetHashCode();
      if (Desc.Length != 0) hash ^= Desc.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void WriteTo(pb::CodedOutputStream output) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      output.WriteRawMessage(this);
    #else
      if (Id != 0) {
        output.WriteRawTag(8);
        output.WriteInt32(Id);
      }
      if (Format.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(Format);
      }
      if (Key != global::Lumber.Spec.eConfigKey.Default) {
        output.WriteRawTag(24);
        output.WriteEnum((int) Key);
      }
      if (Value.Length != 0) {
        output.WriteRawTag(34);
        output.WriteString(Value);
      }
      if (Desc.Length != 0) {
        output.WriteRawTag(42);
        output.WriteString(Desc);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (Id != 0) {
        output.WriteRawTag(8);
        output.WriteInt32(Id);
      }
      if (Format.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(Format);
      }
      if (Key != global::Lumber.Spec.eConfigKey.Default) {
        output.WriteRawTag(24);
        output.WriteEnum((int) Key);
      }
      if (Value.Length != 0) {
        output.WriteRawTag(34);
        output.WriteString(Value);
      }
      if (Desc.Length != 0) {
        output.WriteRawTag(42);
        output.WriteString(Desc);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int CalculateSize() {
      int size = 0;
      if (Id != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(Id);
      }
      if (Format.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Format);
      }
      if (Key != global::Lumber.Spec.eConfigKey.Default) {
        size += 1 + pb::CodedOutputStream.ComputeEnumSize((int) Key);
      }
      if (Value.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Value);
      }
      if (Desc.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Desc);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(Config other) {
      if (other == null) {
        return;
      }
      if (other.Id != 0) {
        Id = other.Id;
      }
      if (other.Format.Length != 0) {
        Format = other.Format;
      }
      if (other.Key != global::Lumber.Spec.eConfigKey.Default) {
        Key = other.Key;
      }
      if (other.Value.Length != 0) {
        Value = other.Value;
      }
      if (other.Desc.Length != 0) {
        Desc = other.Desc;
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(pb::CodedInputStream input) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      input.ReadRawMessage(this);
    #else
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 8: {
            Id = input.ReadInt32();
            break;
          }
          case 18: {
            Format = input.ReadString();
            break;
          }
          case 24: {
            Key = (global::Lumber.Spec.eConfigKey) input.ReadEnum();
            break;
          }
          case 34: {
            Value = input.ReadString();
            break;
          }
          case 42: {
            Desc = input.ReadString();
            break;
          }
        }
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 8: {
            Id = input.ReadInt32();
            break;
          }
          case 18: {
            Format = input.ReadString();
            break;
          }
          case 24: {
            Key = (global::Lumber.Spec.eConfigKey) input.ReadEnum();
            break;
          }
          case 34: {
            Value = input.ReadString();
            break;
          }
          case 42: {
            Desc = input.ReadString();
            break;
          }
        }
      }
    }
    #endif

  }

  #endregion

}

#endregion Designer generated code
